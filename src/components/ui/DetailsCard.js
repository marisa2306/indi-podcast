import styled from 'styled-components'

const DetailsCard = styled.article`
    box-shadow: 0 3px 5px rgba(0,0,0,.09);
    border: 1px solid #ddd;
    border-radius: 6px;
    max-width: 350px;
    padding: 1em 1.2em;
    font-family: Helvetica,Arial,sans-serif;
    h3 {
        font-weight: bold;
        line-height: 1.2;
        letter-spacing: -.02rem;
        font-size: 1.3em;
        margin: 1.2em auto 0;
        text-align: left;
    }
    h4{
        font-size: 1.1em;
        text-align: left;
        margin: 2em auto .8em;

    }
    p{
        color: #686868; 
        text-align: left;
        font-style: italic;
    }
    .img {
        width: 80%;
        height: 80%;
        margin: auto;
        text-align: center; 
        border-radius: 5%
    }
    hr{
        margin: 2.2em 0;
    }
`
export default DetailsCard
