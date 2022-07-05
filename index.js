import axios from "axios";


const wrapper=fn=>{
    let response={
        idTransction:0
    }
    return async()=>{
        try {
            const data=await fn()
            if(!data)
            {
                response.data=null
                response.idTransction=0
                return response
            }
            response.data=data
            response.idTransction=1
            console.log(response)
            return response
        } catch (error) {
            response.data=null
            response.idTransction=-1
            return response
        }
    }
}

const example=query=>wrapper(async()=>{
    const data=await (await axios(query)).data
    return data
})

const data=async()=>{
    const respuestExacta=await example("https://6265b7895a36b2314d8700bb.mockapi.io/api/v1/Hopla")()
    console.log(respuestExacta)
}


data()