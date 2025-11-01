

const ProdDetBackup = () => {
  return (
    <div className='py-[50px] ' >

    {
        loader ?
            (<SpinnerLoader />)
            : error ?
                (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                (
                    <div>
                        <h1 className='mx-auto text-center text-3xl  ' >This is the Product Detail Page</h1>
                        <h2 className='text-2xl' >Product Parameter {params.slug}</h2>
                        <img src={prodData.feat_img} alt="" />
                        <h3>{prodData.name}</h3>

                        <p className='text-decoration-line'  > Regular Price: Rs: {prodData.price?.reg_price} </p>
                        <p className=''  > Sale Price: Rs: {prodData.price?.sale_price} </p>
                    </div>
                )
    }

</div>
  )
}

export default ProdDetBackup