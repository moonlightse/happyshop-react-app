import React, { useState } from 'react'
import request from '../../connect/AxiosCofig';
import './style.css'
import { Form, Input, Button, Checkbox, Layout, Menu, Breadcrumb, Col, Row, Image } from 'antd';



const { Header, Content, Footer } = Layout;
const Home = () => {

    return (
        
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <Row>
                        <Col span={6}><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                            <p>Ahihihi</p>
                        </Col>
                        <Col span={6}><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                            <p>Ahihihi</p></Col>
                        <Col span={6}><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                            <p>Ahihihi</p>
                        </Col>
                        <Col span={6}><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                            <p>Ahihihi</p>
                        </Col>
                    </Row>
                </div>
           
    );
};

export default Home