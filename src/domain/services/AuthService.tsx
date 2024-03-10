interface UserResponse {
    name: string;
    lastName: string;
    birthDay: string;
  }
  
  class UserService {
    async getUserData(): Promise<UserResponse | null> {
      try {
        const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData: UserResponse = await response.json();
        return userData;
      } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
    }
  }
  
  export default UserService;
  