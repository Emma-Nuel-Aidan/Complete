export default function Checkout() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Checkout (Demo)</h2>
      <p>This is a demo checkout screen. Flutterwave payment integration will use your keys in production.</p>
      <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Simulate Payment (MTN / Airtel / Card)
      </button>
    </div>
  );
}
