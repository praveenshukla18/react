import authHeader from '../../../authentication/services/authheader';

const API_URL = 'https://apertum-interview.herokuapp.com/api/';

class UserService {

  getUsers() {
    return fetch(API_URL + 'users', {
		headers: authHeader()
	});
  }
  
}

export default new UserService();