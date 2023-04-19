import * as React from "react"
import Layout from "../components/layout"
import Form from "../components/form"
import Seo from "../components/seo"
import  "./index.css"
import About from "../components/about"
import Footer from "../components/footer";
import './../18n'
 import DataContextProvider from "../dataContext/DataContextProvider";
import 'antd/dist/antd.css'
import {Helmet} from "react-helmet";





const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <link href="https://www.dafontfree.net/embed/YXJ0YXJ1bWlhbmVyZXZhbi1yZWd1bGFyJmRhdGEvMzEvYS8xNTU3MTAvQXJUYXJ1bWlhbkVyZXZhbiBSZWd1bGFyLnR0Zg" rel="stylesheet" type="text/css" />
            </Helmet>
        <Layout>
            <DataContextProvider>
                <Form />
            </DataContextProvider>
            <About />
            <Footer />
        </Layout>
    </>
    )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
