
const Description =() =>{
    return(
        <div className="mt-6 px-4 sm:px-10  md:flex   md:px-[10%]">
            <main className="mb-10 flex-1 md:w-[50%] ">
                <h1 className="text-4xl font-extrabold text-red-600 break-words 
                sm:text-6xl md:text-8xl">YOUR FEET DESERVE THE BEST</h1>
                <p className="mt-6 sm:text-xl">
                    your feet deserve the best and we are here to help you with our shoes. your feet deserve the bestand we are here to help you with our shoes
                </p>
                <button type="button" className="bg-red-600 text-white p-1 mt-5 mr-8">shop now</button>
                <button type="button" className="border-2 border-black p-1">Category</button>
                <div className="flex items-center mt-5">
                   <div className="w-[5%]">
                    <img src="https://e7.pngegg.com/pngimages/946/191/png-clipart-flipkart-e-commerce-logo-bangalore-chief-executive-others-miscellaneous-blue-thumbnail.png" alt="icon" className="w-[100%]"></img>
                   </div>
                   <div className="w-[10%]">    
                    <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="icon" className="w-[100%]"></img>
                    </div>
                </div>
            </main>
            <div className="p-4  mb-10 flex-1 md:w-[50%]  md:py-16 md:h-[550px]">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" alt="shoes-imge" className="w-[100%] md:h-[100%] object-cover"></img>
             </div>

        </div>
    )
}
export default Description;