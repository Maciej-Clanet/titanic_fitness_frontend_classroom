import "./Article.css"
import { useState, useEffect } from "react"
import axios from "axios"

import { marked } from "marked"
import { useParams, useNavigate } from "react-router-dom"

const Article = () =>{
    const {article_id} = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get(`http://localhost:8000/articles/article/${article_id}`)
        .then( (res) => {
            setArticle(res.data)
            setLoading(false)
        })
        .catch( (error) => {
            console.error("there was an error loading article: ", error)
            setLoading(false)
        })

    }, [])

    function createMarkup(markdown){
        return {__html: marked(markdown)}
    }

    if(loading){
        return(<div>Loading...</div>)
    }
    if(article == null){
        return(<div>Article not found</div>)
    }
    return(
        <div>
            <div className="article-content" dangerouslySetInnerHTML={createMarkup(article.content)} />
        </div>
    )
}

export default Article