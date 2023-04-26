import React, { useEffect, useState } from 'react'
import './Main.css'

function Main() {
const [num,setNum] = useState(0)
const [quote,setQuote]=useState('')
const [author,SetAuthor] = useState('')

    useEffect(()=>{
        func();
        let random = randomNum()
        console.log(random);
        setNum(random)
    },[])
    const quotes = [
        {
          quote: "Don't cry because it's over, smile because it happened.",
          author: "Dr. Seuss"
        },
        {
          quote: "You only live once, but if you do it right, once is enough.",
          author: "Mae West"
        },
        {
          quote: "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde"
        },
        {
          quote:
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          author: "Albert Einstein"
        },
        { quote: "So many books, so little time.", author: "Frank Zappa" },
        {
          quote: "A room without books is like a body without a soul.",
          author: "Marcus Tullius Cicero"
        },
        {
          quote:
            "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
          author: "J.K. Rowling"
        }
      ];

      const randomNum = ()=>{
            return Math.floor(Math.random() * 7);
  
      }

      const func = () =>{
        let f = randomNum()
        setQuote(quotes[f].quote)
        SetAuthor(quotes[f].author)

      }
  return (
    <div>
        <div className='container text-center'>
            <div className='row'>
                <div className='card' style={{width:"60%"}}>
                    <div className='container'>
                        <div className='quoteicon'> <i class="fa-solid fa-quote-left" style={{}}></i> <div className="quote">{quote}</div></div>
                        <div>--{author}</div>
                        <button className='btn' onClick={()=>func()}> Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main