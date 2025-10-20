'use client';

import React from 'react';
import styles from './formVirtuozzo.module.scss';
import { Col, Row, Segmented, Typography, Select, InputNumber, Button } from 'antd';
import Image from 'next/image';
import type { InputNumberProps } from 'antd';

const FormVirtuozzo = () => {
  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };
  return (
    <div className={styles.card}>
      <Row gutter={[30, 20]}>
        <Col span={24}>
          <div className={styles.card__title}>
            <Typography.Title level={3} style={{ fontWeight: 700, fontSize: '16px' }}>
              Ресурсы вашего облака Virtuozzo PaaS
            </Typography.Title>
            <Segmented<string>
              options={['в час', 'в месяц']}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/core.svg" alt="Core" width={30} height={30} />
            <div className={styles.item__content}>
              <InputNumber
                min={1}
                max={500}
                defaultValue={3}
                onChange={onChange}
                style={{ width: '100%' }}
              />
              <span>
                <span style={{ fontWeight: 700 }}>1 900</span> тг за ядро/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/ram.svg" alt="RAM" width={30} height={30} />
            <div className={styles.item__content}>
              <InputNumber
                min={1}
                max={500}
                defaultValue={3}
                onChange={onChange}
                style={{ width: '100%' }}
              />
              <span>
                <span style={{ fontWeight: 700 }}>5 200</span> тг за ГБ/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/nvme.svg" alt="NVME" width={30} height={30} />
            <div className={styles.item__content}>
              <InputNumber
                min={1}
                max={500}
                defaultValue={3}
                onChange={onChange}
                style={{ width: '100%' }}
              />
              <span>
                <span style={{ fontWeight: 700 }}>160</span> тг за ГБ/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/disk.svg" alt="Disk" width={30} height={30} />
            <div className={styles.item__content}>
              <InputNumber
                min={1}
                max={500}
                defaultValue={3}
                onChange={onChange}
                style={{ width: '100%' }}
              />
              <span>
                <span style={{ fontWeight: 700 }}>10</span> тг за ГБ/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/public-network.svg" alt="Public Network" width={30} height={30} />
            <div className={styles.item__content}>
              <Select
                defaultValue="not-order"
                style={{ width: '100%' }}
                options={[
                  { value: 'order', label: 'Заказывать ' },
                  { value: 'not-order', label: 'Не заказывать' }
                ]}
              />
              <span>
                <span style={{ fontWeight: 700 }}>0</span> тг/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/ip-address.svg" alt="Ip Address" width={30} height={30} />
            <div className={styles.item__content}>
              <InputNumber
                min={1}
                max={500}
                defaultValue={3}
                onChange={onChange}
                style={{ width: '100%' }}
              />
              <span>
                <span style={{ fontWeight: 700 }}>1000</span> тг за адрес/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/router.svg" alt="Router" width={30} height={30} />
            <div className={styles.item__content}>
              <Select
                defaultValue="compact"
                style={{ width: '100%' }}
                options={[
                  { value: 'compact', label: 'Compact — 1 vCPU, 512 MB RAM' },
                  { value: 'large', label: 'Large — 2 vCPU, 1 GB RAM' }
                ]}
              />
              <span>
                <span style={{ fontWeight: 700 }}>3 000</span> тг/мес
              </span>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Row gutter={[30, 20]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Button type="primary" style={{ width: '100%' }}>
                Заказать
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} style={{ display: 'flex', alignItems: 'center' }}>
              <Typography.Text>
                за <span style={{ fontWeight: 700 }}>45 200</span> тг/мес
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FormVirtuozzo;
