import React, { Component } from 'react'
import {Row,Col, Container } from 'react-bootstrap'

import logo from '../../assets/img/logo.png'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='homepage'>
        <header className='w-100 min-vh-100 d-flex align-items-center header header-bg pt-lg-5'>
          <Container>
            <Row className='header-box d-flex align-items-center'>
                <Col lg="6" >
                <img
                  src={logo}
                  alt="Company Logo"
                  className="mr-3 rounded-circle"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
                  <h1 className='mb-4'>PT. DORMA MADA PERKASA</h1>
                  <p>"Menyediakan Solusi Terbaik: Pengadaan Barang, Konstruksi, Mekanikal,<br/> 
                    dan Interior, Untuk Mewujudkan Proyek Impian Anda!"</p>
                </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}


