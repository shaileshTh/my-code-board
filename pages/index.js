import fetch from 'isomorphic-unfetch'

import Card from 'components/Card'

import { Flex, Box } from 'reflexbox'   
import Link from 'next/link'

const HomePage = ({ posts }) => {
    return(
    // max-width: 960px; width: 100%; margin: 0 auto; padding: 30px;
    <Box variant = "container">
        <Flex justifyContent = "space-between" flexDirection = {{_: "column"}}>
            {posts.map(post => (
                <Box key = {post.id} width = {{_: "100%", md: "80%"}} variant = "post">
                    <Link href = {`/posts/${post.id}`}><a style = {{textDecoration: "none", color:"black"}}>
                    <Card post = {post} /></a>
                    </Link>
                </Box>
            ))}
        </Flex>
    </Box>
    )
}

export async function getStaticProps(){
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/posts`);
    const posts = await res.json();

    return{
        props:{
            posts
        }
    }
}

export default HomePage