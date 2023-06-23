import React, {Component, Suspense} from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from "../../../../components/shared-components/Loading";

export class UserList extends Component {

    state = {
        users: null,
        loadUsers: false,
        userProfileVisible: false,
        selectedUser: null
    }

    sleep = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    fetchUsers = async () => {
        this.setState({loadUsers: true});
        await this.sleep(1000) // TODO: delete
        const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
        this.setState({users: users, loadUsers: false});
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    }

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null
        });
    }

    componentDidMount(){
        this.fetchUsers();
    }

    render() {
        const { users, userProfileVisible, selectedUser } = this.state;

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus name={record.name} username={record.username} subTitle={record.email}/>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                sorter: {
                    compare: (a, b) => a.phone.length - b.phone.length,
                },
            },
            {
                title: 'Website',
                dataIndex: 'website',
                sorter: {
                    compare: (a, b) => a.website.localeCompare(b.website),
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right d-flex justify-content-end">
                        <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
                        </Tooltip>
                    </div>
                )
            }
        ];

        if (!this.state.loadUsers) {
            return (
                <Card bodyStyle={{'padding': '0px'}}>
                    <div className="table-responsive">
                        <Table columns={tableColumns} dataSource={users} rowKey='id' />
                    </div>
                    <UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
                </Card>
            )
        }
        return <Loading />
    }
}

export default UserList
