import axios from 'axios';
import querystring from 'querystring';
import URL from 'url';
const axiosConfig = {timeout: 60000,}

export default function (ctx){
	let instance = axios.create(axiosConfig);

	ctx.get = async (url,params={}) => {
		let result = {};
		try{
			let strParams = querystring.stringify(params);
			result = await instance.get(url)
		}catch(e){
			result = e.response
		}
		return result.data;
	} 
}