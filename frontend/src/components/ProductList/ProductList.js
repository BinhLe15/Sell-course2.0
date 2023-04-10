import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "../Product/Product";
import Form from 'react-bootstrap/Form';

import './ProductList.css'
const ProductList = () => {
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    const [openListcourse, setopenListcourse] = useState(false);
    const [opensubCourse, setopenSubcourse] = useState(false);

    return (<div>
        <Banner imgs={img} />
        <div className='body'>
            <p><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Tất cả sản phẩm</span></p>
            <Container>
                <Row style={{ padding: '15px 0px' }}>
                    <Col xs={6} style={{ padding: '0px 8px' }}>
                        <img className="img-banner" style={{ width: '100%', borderRadius: '10px', }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_featured_1.png?1676281841878' />
                    </Col>
                    <Col xs={6} style={{ padding: '0px 8px' }}>
                        <img className="img-banner" style={{ width: '100%', borderRadius: '10px' }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_collection_2.png?1676281841878' />
                    </Col>
                </Row>
                <div style={{ margin: '20px 0' }}>
                    <Row >
                        <Col xs='3' style={{ position: 'relative' }}>
                            <p className="header-text-loai">TẤT CẢ SẢN PHẨM</p>
                            <div className={`sb-subcourse`}>
                                <p className="header-text-sub" onClick={() => setopenSubcourse(!opensubCourse)}>KHÓA HỌC</p>
                                <ul className={`course-nav `}>
                                    <li><Link className='text-course-nav'>Trang chủ</Link></li>
                                    <li style={{position:'relative'}} className='text-course-nav'  onClick={() => setopenListcourse(!openListcourse)}>Danh sách khóa học
                                        <div>
                                            <ul className={`list-course ${openListcourse ? 'active' : 'inactive'}`}>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                            </ul>
                                        </div>
                                        <img className={`arrow-icon ${openListcourse ? 'active' : 'inactive'}`} style={{position:'absolute'}} src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"/>
                                    </li>

                                    <li><Link className='text-course-nav'>Khóa học tiêu biểu</Link></li>
                                    <li><Link className='text-course-nav'>Liên hệ</Link></li>
                                    <li><Link className='text-course-nav'>Giới thiệu</Link></li>
                                </ul>
                            </div>
                            <div className={`sb-level  ${opensubCourse ? 'activesubcourse' : 'inactivesubcourse'}`}>
                                <p className="header-text-sub">TRÌNH ĐỘ</p>
                                <Form>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxNormal">
                                        <Form.Check  type="checkbox" label="Cơ bản"/>
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxMedium">
                                        <Form.Check type="checkbox" label="Mọi cấp độ"/>
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxHard">
                                        <Form.Check type="checkbox" label="Nâng cao"/>
                                    </Form.Group>
                                </Form>
                            </div>
                            <div>
                            <p className="header-text-sub">MỨC GIÁ</p>
                                <Form>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxUnder200">
                                        <Form.Check type="checkbox" label="Giá dưới 200.000đ" />
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxBetween200300">
                                        <Form.Check type="checkbox" label="200.000đ - 300.000đ" />
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxBetween300400">
                                        <Form.Check type="checkbox" label="300.000đ - 400.000đ" />
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxBetween400500">
                                        <Form.Check type="checkbox" label="400.000đ - 500.000đ" />
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxUp500">
                                        <Form.Check type="checkbox" label="Giá trên 500.000đ"/>
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className="sb-time">

                            </div>
                        </Col>
                        <Col xs='9'>
                            <Row >
                                <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                    <Product />
                                </Col>
                                <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                    <Product />
                                </Col>
                                <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                    <Product /></Col>
                                <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                    <Product />
                                </Col>
                                <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                    <Product />
                                </Col>
                                <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                    <Product />
                                </Col>
                                <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                    <Product />
                                </Col>
                                <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                    <Product />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    </div>);
}
export default ProductList;