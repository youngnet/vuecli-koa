import React ,{Component} from "react";
import NavBar from "../common/NavBar";
import ContentBody from "../common/ContentBody"
export default class UserManage extends Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				{/* <NavBar parent={this} navs={[{title:"活动管理",href:"/wyyx/activity"},{ title: "新建活动" }]} /> */}
				<NavBar parent={this} navs={[{ title: "用户管理" }]} />
				<ContentBody>
					<div>
						用户管理
					</div>
				</ContentBody>
			</div>
		)
	}
}