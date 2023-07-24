

export default function Quote({ quote }) {
  return (
      <div className="mx-auto w-screen items-center content-center justify-items-center text-center">
          <p
              className="mt-1 text-xl font-bold uppercase text-gray-900 sm:text-4xl sm:tracking-tight lg:text-2xl quote-orange quote text-center w-5/6 mx-auto flex justify-center"
          >
              {quote.quote}
          </p>
          <div className="mt-4 flex items-center justify-center text-base font-medium text-gray-900 justify-items-center">
              <h3 className="text-center">{quote.author}</h3>
          </div>
          <p className="text-sm italic text-gray-500 text-center">
              {quote.reference}
          </p>
      </div>
  )
}
