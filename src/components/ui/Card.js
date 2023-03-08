import styled from 'styled-components'

export const Card = styled.article`
    box-shadow: 0 2px 4px rgba(0,0,0,.08);
    border: 1px solid #ddd;
    border-radius: 6px;
    max-width: 350px;
    text-align: center;
    margin-top: 60px;
    padding: 1em;
`

export const ImgFrame = styled.div`
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 100%;
    margin: -60px auto 0;
   
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Title = styled.h3`
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1em;
    text-transform: uppercase;
    margin-top: 1em;
`
export const Author = styled.p`
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1em;
    color: #858585;   
    margin-top: 1em;
`
