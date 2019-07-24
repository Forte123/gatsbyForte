import React from 'react';
import Layout from "../../components/layout2";
import { graphql } from 'gatsby';
import CustomHeader from "../../components/customheader";
import Styles from './about.module.css';
import Logo from '../../images/forte.png'

const User = props => (
    <div className={Styles.user}>
        <img src={props.avatar} className={Styles.avatar} alt="Avatar" />
        <div className={Styles.description}>
            <h2 className={Styles.username}>{props.username}</h2>
            <p className={Styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

const AboutPage= ({data}) =>(
    <Layout>
        <div className="my-background">
            <h1>ABout Page</h1>
            <p>Lorem Ipsum</p>
            <CustomHeader name='Forte' content='This is demo' />
            <User 
                username = {data.site.siteMetadata.author}
                avatar = {Logo}
                excerpt = "Ceo at Web-Forte Technologies Pvt. Ltd."
                />
        </div>
    </Layout>
)

export const query = graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
`

export default AboutPage;