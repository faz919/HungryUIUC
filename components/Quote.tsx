

export default function Quote({ quote }) {
  return (
      <div className="container mx-auto w-screen items-center content-center justify-center justify-self-center justify-items-center">
          <p
              className="mt-1 text-xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-3xl w-4/6 quote-orange quote text-center"
          >
              {quote.quote}
          </p>
          <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>{quote.author}</h3>
          </div>
          <p className="mt-1 text-sm italic text-gray-500">
              {quote.reference}
          </p>
      </div>
  )
}
