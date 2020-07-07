import styled from '@emotion/styled'

function SingleCard ({ post }){
    const { API_URL } = process.env;
    const date = post.updated_at;
    const displayText = post.description.replace(/\n/g, "<br />");
    

    return(
        <div>
            <CardStyled>
                <div className = "body">
                    <h1>{ post.post_title }</h1>
                    <Author>last updated {date.substring(0,10)} by <font style = {{color:"black", textDecoration: "underline"}}>{post.user.username}</font></Author><br/>
                    <p style = {{color:"black", fontSize: "1.5em"}} dangerouslySetInnerHTML = {{ __html: displayText }} />
                    <Likes>{post.likes} likes</Likes>
                </div>
            </CardStyled> 

        </div>
    )
}
const Author = styled.p`
    font-style:italic;
`

const Likes = styled.p`
    font-style:italic;
    text-align:center;
`
const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .body{
        padding: 20px;

        h3{
            margin-bottom: 20px;
        }

        p{
            color: #666666;
            line-height: 1.5;
        }
    }
`
export default SingleCard