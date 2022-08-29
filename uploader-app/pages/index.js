import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Dropzone from '../components/dropzone'
import Loader from '../components/loader'
import Container from '../components/container'
import { useState } from 'react'

export default class Uploader extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            imgUrl : null,
            progresspercent : 0,
            dropBlock : 'flex',
            loadingBlock : 'none'
        }
        this.setProgresspercent = this.setProgresspercent.bind(this); 
        this.setImgUrl = this.setImgUrl.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(){
        this.setState({
            dropBlock: 'none',
            loadingBlock: 'flex' 
        })
    }

    setProgresspercent(progress) {
        this.setState({
            progresspercent: progress
        })
        if(progress===100)
        {
            console.log('final image')
            this.setState({
                loadingBlock : 'none',
            })
        }
        
    }
    setImgUrl(url){
        this.setState({
            imgUrl : url
        })
    }

    render(){
        return(
            <>
                <Container display={this.state.dropBlock} padding='2.5rem' content={
                    <>
                        <h2 className='font-medium text-2xl text-gray-700'>Upload your image</h2>
                        <span className='text-gray-600'>File should be Jpeg, Png,...</span>
                        <Dropzone setProgresspercent={this.setProgresspercent} setImgUrl={this.setImgUrl} handleDrop = {this.handleDrop}/>
                    </>
                    
                }/>
                    
                <Loader display={this.state.loadingBlock} progress={this.state.progresspercent} />
                
                <Container width='400px' height='auto' display={this.state.imgUrl? "flex" : 'none'} padding="2.5rem" content={
                    <>
                        <h2 className='font-medium text-2xl text-gray-700'>Uploaded Successfully!</h2>
                        <img className='rounded-2xl' width='100%' src={this.state.imgUrl} alt='uploaded file' height='auto' />
                        <div className='flex text-xs rounded-xl bg-gray-200 h-7 overflow-clip content-center gap-2 p-1'>
                            <p className='overflow-clip h-6 p-1'>{this.state.imgUrl}</p>
                            <button type='button' className='rounded-xl bg-blue-500 text-white text-center p-1 self-center' style={{width:"300px"}} onClick={() => {navigator.clipboard.writeText(this.state.imgUrl)}} >Copy Link</button>
                        </div>
                    </>

                }/>
                    
                  
            
            </>
        )
    }
}


