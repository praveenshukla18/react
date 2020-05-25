class AuthService{

	login(uname, pwd){
		return fetch('https://apertum-interview.herokuapp.com/api/user/login', {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body:JSON.stringify({
				"accountId": uname,
				"pswd": pwd
			})
		}).then(function(response){
			if (response.status >= 200 && response.status <= 299) {
				return response.json();
			} else {
				localStorage.removeItem("token");
			  throw Error(response.statusText);
			}
		}).then(function(data){
			if(data['error_message']){
				throw Error(data['error_message']);
			}
			localStorage.setItem("token", JSON.stringify(data.token));
			return data;
		});
		
	}

	logout(){
		localStorage.removeItem("token");
	}
	
	isValidSession(){
		const token = JSON.parse(localStorage.getItem('token'));
		return token;
	}
	
}

export default new AuthService();