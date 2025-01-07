export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-6">Last updated: January 6, 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Medical Disclaimer</h2>
          <p>
            The information provided by The Genius Wave is for general informational purposes only. The audio programs and content are not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Results Disclaimer</h2>
          <p>
            Individual results may vary. The testimonials and examples used are exceptional results and are not intended to guarantee, promise, represent and/or assure that anyone will achieve the same or similar results.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Disclaimer</h2>
          <p>
            The Genius Wave is not a medical device and has not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at:{' '}
            <a href="mailto:passiveincomestreaming@gmail.com" className="text-blue-600 hover:underline">
              passiveincomestreaming@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

