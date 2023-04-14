import * as React from "react"
import Layout from "../components/layout"
import Form from "../components/form"
import Seo from "../components/seo"
import  "./index.css"
import About from "../components/about"
import Footer from "../components/footer";
import './../18n'
import {useTranslation} from "react-i18next";
import DataContextProvider from "../dataContext/DataContextProvider";




const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {

    return (
        <Layout>
            <DataContextProvider>
                <Form />
            </DataContextProvider>
            <About />
            <Footer />
        </Layout>
    )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
