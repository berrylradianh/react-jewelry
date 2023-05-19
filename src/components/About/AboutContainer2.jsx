import "../component.css"

const AboutContainer2 = () => {
  return (
    <>
      <div className="AboutContainer-2 flex flex-col">
        <div className="w-1/2 ml-[650px] mt-96">
          <div>
            <h1 className="text-2xl text-red-900 opacity-30">WHY US</h1>
            <h1 className="text-3xl text-rose-900 opacity-40">WHY US</h1>
            <h1 className="text-4xl text-rose-900 opacity-50">WHY US</h1>
            <h1 className="text-5xl text-red-900">WHY US?</h1>
          </div>
          <div className="mt-8">
              <p className="text-gray-700">Victoria Jewellery memberikan pelayanan terbaik. Setiap pembelian perhiasan di Victoria Jewellery Anda bisa mendapatkan keuntungan sebagai berikut:  </p>
                <ol>
                    <li className="text-gray-700">1. Buyback guarantee untuk jual barang dan tukar tambah</li>
                    <li className="text-gray-700">2. 100% berlian asli</li>
                    <li className="text-gray-700">3. Gratis layanan cuci berlian, cek nomor GIA, dan silicon</li>
                    <li className="text-gray-700">4. Menerima cicilan 0% (3-24 bulan)</li>
                    <li className="text-gray-700">5. Melayani custom model perhiasan berlian sesuai permintaan serta masih banyak keuntungan lainnya.</li>
                </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContainer2;