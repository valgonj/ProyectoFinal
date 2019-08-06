import React, {Component} from 'react';

import {paxios} from '../../../../Utilities'
import InfiniteScroll from 'react-infinite-scroller'
import { IoIosInformationCircleOutline } from 'react-icons/io';

export default class Post extends Component{

    constructor(){
        super();
        this.state = {
            things:[],
            hasMore:true,
            page:1,
            itemsToLoad:10
        }
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount(){
        paxios.get('/api/things/page/1/10')
        .then(
            ({data})=>{
                console.log(data);
            }
        )
        .catch((err)=>{
            console.log(err);
        })

    }

    loadMore(page){
        const items = this.state.itemsToLoad;
        const uri = `/api/things/page/${page}/${items}`;
        paxios.get(uri)
        .then
    }

    render(){
        const items = this.state.things.map(
            (thing)=>{
                return  (
                    <div className="thingItem" 
                        key={thing._id}>
                            <span>
                                {thing.descripcion}
                            </span>
                            <IoIosInformationCircleOutline size="2em"/>
                    </div>
                );
            }
        );
        return(
            <section>
                <h1>
                    Catálogo </h1>
                    <div className="post" ref={((ref)=>this.scrollParentRef = ref)}>
                    <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.state.hasMore}
                    useWindow={false}
                    getScrollParent={()=>this.scrollParentRef}
                    loader={(<div>Mas..</div>)}

                    >
                        {items}
                    </InfiniteScroll>
                </div>
            </section>
        );
    }
}