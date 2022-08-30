import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        category: "genaral" //by default category set to be genaral
    }
    static propTypes = {
        category: PropTypes.string, //here we set category types.
    }
    articles = [ //i fetch articles from api.
        {
        }
    ]
    constructor(props) { //constructor is used for creating objects.
        super(props); //The super keyword refers to superclass (parent) objects. It is used to call superclass methods, and to access the superclass constructor. 
        this.state = { //its a state variable,in function components we just hook usestate,but here we need to declare it into constructor.
            articles: this.articles, //we can declare this keyword and access parent class for super method.
            loading: false,
            page: 1,
            totalResults: 0

        }
        document.title = `News-${this.props.category}` //show website title category wise.

    }
    fetchMoreData = async () => { //for fetch data
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=56ccc68ae46b4de2be5842aae7cdcadf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults });

    };
    async updateNews() { //we see the same code run in 3 function,so we write a function for this code and call it those functions.
        this.props.setProgress(10);
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=56ccc68ae46b4de2be5842aae7cdcadf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json();
        this.props.setProgress(70);
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        //herer we fetch data from api linkbwith componentdidmount lifecycle method.
        // console.log("cdm");
        // this.setState({ loading: true });
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a702d6b78843c18c2343f4f71db8bb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });
        this.updateNews();
    }
    //when we click previous button this function will run
    // previousClick = async () => {
    //     console.log("previous button click");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a702d6b78843c18c2343f4f71db8bb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({ loading: true }); //before fetch my loadng state set to be true.
    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parseData.articles,
    //     //     loading: false
    //     // });
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }
    // nextClick = async () => {
    //     console.log("next button click");
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {//math.ceil take siling value of a floating nunmber.

    //         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a702d6b78843c18c2343f4f71db8bb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         // this.setState({ loading: true });
    //         // let data = await fetch(url);
    //         // let parseData = await data.json();

    //         // this.setState({

    //         //     page: this.state.page + 1,
    //         //     articles: parseData.articles,
    //         //     loading: false
    //         // });
    //         this.setState({ page: this.state.page + 1 });
    //         this.updateNews();
    //     }
    // }
    render() {
        return (
            <>
                <h1 className="my-4 text-center" style={{ paddingTop: '60px' }}>News-top headline about {this.props.category} </h1>
                {/* if loading variable set to be true then Spinner component arrives. */}
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-auto" key={this.url}>
                            {this.state.articles.map((element) => { //because map function encounter each of the elements ,we need to use key for uniqueness
                                return <div className="col-md-4" key={element.id}>
                                    <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} urlContent={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex mx-auto justify-content-between">
                                <button type="button mx-3" disabled={this.state.page <= 1} onClick={this.previousClick} className="btn btn-dark">previous</button>
                                <button type="button mx-3" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.nextClick} className="btn btn-dark">next</button>
                            </div> */}

            </>
        )
    }
}
