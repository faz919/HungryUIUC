import quotes from "../data/quotes.json"
import Quote from '../components/Quote'
import { ChevronLeft, ChevronRight } from "react-feather" 
import { useEffect, useState } from "react"

export default function QuoteCarousel() {

    const [visibleQuote, setVisibleQuote] = useState(0)
    const prevQuote = () => {
        setVisibleQuote((quote) => (quote === 0 ? quotes.length - 1 : quote - 1))
        console.log(`quote is now ${visibleQuote}`)
    }
    const nextQuote = () => {
        setVisibleQuote((quote) => (quote === quotes.length - 1 ? 0 : quote + 1))
        console.log(`quote is now ${visibleQuote}`)
    }
    useEffect(() => {
        const next = setInterval(() => {
            nextQuote();
        }, 10000)
        return () => clearInterval(next);
    }, [nextQuote])
    return (
        <div className="overflow-hidden relative pt-16 pb-5">
            <div className='flex transition-transform ease-in-out duration-700' style={{ transform: `translateX(-${visibleQuote * 100}%)` }}>
                {quotes &&
                    quotes.map((quote) => (
                        <div className='w-screen items-center quote-div justify-items-center'>
                            <Quote quote={quote} key={quote.id} />
                        </div>
                    ))
                }
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <button
                    onClick={prevQuote}
                    className="text-gray-900 p-20 pr-40 opacity-0 hover:opacity-100 transition-opacity duration-500"
                >
                    <ChevronLeft size={40} />
                </button>
                <button
                    onClick={nextQuote}
                    className="text-gray-900 p-20 pl-40 opacity-0 hover:opacity-100 transition-opacity duration-500"
                >
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    )
}