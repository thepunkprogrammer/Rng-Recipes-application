import {gql} from 'apollo-boost';



/* Recipes queries */
export const GET_ALL_RECIPES  = gql`
query {
	getAllRecipes {
		
		_id

		name
	
		category

	}
}`;


export const GET_RECIPE = gql`
query($_id: ID!){
  getRecipe(_id: $_id){
    _id
    name
    category
    description
    instructions
    createdDate
    likes
  }
}
`


/* Recipes Mutation */

/* User mutation */

export const SIGNUP_USER = gql`
	mutation($username: String!, $email: String!, $password: String!) {
		signUpUser(username: $username, email: $email, password: $password) {
			token
		}
	}`;

export const SIGNIN_USER = gql`
	mutation($username: String!, $password: String!){
		signInUser(username: $username, password: $password) {
			token
		}
	}`;


/* User queries */
export const GET_CURRENT_USER = gql`
	query{
		getCurrentUser {
			username
			joinDate
			email
		}
	}
`;
