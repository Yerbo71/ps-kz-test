'use client';

import React, { useMemo, useState } from 'react';
import styles from './formVirtuozzo.module.scss';
import { Col, Row, Segmented, Typography, Button, Modal, App } from 'antd';
import Image from 'next/image';
import { OutlinedNumberInput } from '@/components/shared/outlinedNumberInput';
import { OutlinedSelect } from '@/components/shared/outlinedSelect';
import { prices } from './inner/mock';
import { FormValues } from './inner/type';
import { Controller, useForm } from 'react-hook-form';

const FormVirtuozzo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    control,
    watch,
    reset,
    handleSubmit: formHandleSubmit
  } = useForm<FormValues>({
    defaultValues: {
      cores: 0,
      ram: 0,
      nvme: 0,
      archive: 0,
      ip: 0,
      publicNetwork: 'not-order',
      router: 'compact',
      period: 'month'
    }
  });

  const { message } = App.useApp();
  const values = watch();

  const total = useMemo(() => {
    const baseSum =
      values.cores * prices.cores +
      values.ram * prices.ram +
      values.nvme * prices.nvme +
      values.archive * prices.archive +
      values.ip * prices.ip +
      prices.publicNetwork[values.publicNetwork] +
      prices.router[values.router];
    return values.period === 'month' ? baseSum : baseSum * 30;
  }, [values]);

  const onSubmit = (data: FormValues) => {
    const hasSelectedResources =
      data.cores > 0 ||
      data.ram > 0 ||
      data.nvme > 0 ||
      data.archive > 0 ||
      data.ip > 0 ||
      data.publicNetwork === 'order';

    if (!hasSelectedResources) {
      message.warning('Выберите хотя бы один ресурс для заказа');
      return;
    }
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    reset({
      cores: 0,
      ram: 0,
      nvme: 0,
      archive: 0,
      ip: 0,
      publicNetwork: 'not-order',
      router: 'compact',
      period: 'month'
    });
  };

  const handleOrderClick = () => {
    formHandleSubmit(onSubmit)();
  };

  return (
    <div className={styles.card}>
      <Row gutter={[30, 20]}>
        <Col span={24}>
          <div className={styles.card__title}>
            <Typography.Title level={3} style={{ fontWeight: 700, fontSize: '16px' }}>
              Ресурсы вашего облака Virtuozzo PaaS
            </Typography.Title>
            <Controller
              name="period"
              control={control}
              render={({ field }) => (
                <Segmented<string>
                  options={[
                    { label: 'в месяц', value: 'month' },
                    { label: 'за день', value: 'day' }
                  ]}
                  value={field.value}
                  onChange={(v) => field.onChange(v)}
                />
              )}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/core.svg" alt="Core" width={30} height={30} />
            <div className={styles.item__content}>
              <Controller
                name="cores"
                control={control}
                render={({ field }) => (
                  <OutlinedNumberInput
                    label="Ядра процессора"
                    value={field.value}
                    onChange={(v) => field.onChange(v)}
                    min={0}
                  />
                )}
              />
              <span>
                <b>{prices.cores}</b> тг за ядро/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/ram.svg" alt="RAM" width={30} height={30} />
            <div className={styles.item__content}>
              <Controller
                name="ram"
                control={control}
                render={({ field }) => (
                  <OutlinedNumberInput
                    label="Оперативная память, ГБ"
                    value={field.value}
                    onChange={field.onChange}
                    min={0}
                  />
                )}
              />
              <span>
                <b>{prices.ram}</b> тг за ГБ/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/nvme.svg" alt="NVME" width={30} height={30} />
            <div className={styles.item__content}>
              <Controller
                name="nvme"
                control={control}
                render={({ field }) => (
                  <OutlinedNumberInput
                    label="Быстрый диск NVME, ГБ"
                    value={field.value}
                    onChange={field.onChange}
                    min={0}
                  />
                )}
              />
              <span>
                <b>{prices.nvme}</b> тг за ГБ/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/disk.svg" alt="Disk" width={30} height={30} />
            <div className={styles.item__content}>
              <Controller
                name="archive"
                control={control}
                render={({ field }) => (
                  <OutlinedNumberInput
                    label="Архивный диск, ГБ"
                    value={field.value}
                    onChange={field.onChange}
                    min={0}
                  />
                )}
              />
              <span>
                <b>{prices.archive}</b> тг за ГБ/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/public-network.svg" alt="Public Network" width={30} height={30} />
            <div className={styles.item__content}>
              <Controller
                name="publicNetwork"
                control={control}
                render={({ field }) => (
                  <OutlinedSelect
                    label="Публичная сеть"
                    defaultValue={field.value}
                    options={[
                      { value: 'order', label: 'Заказывать' },
                      { value: 'not-order', label: 'Не заказывать' }
                    ]}
                    onChange={(v) => field.onChange(v)}
                  />
                )}
              />
              <span>
                <b>{prices.publicNetwork[values.publicNetwork]}</b> тг/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/ip-address.svg" alt="Ip Address" width={30} height={30} />
            <div className={styles.item__content}>
              <Controller
                name="ip"
                control={control}
                render={({ field }) => (
                  <OutlinedNumberInput
                    label="Маршрутизируемые IP-адреса"
                    value={field.value}
                    onChange={field.onChange}
                    min={0}
                  />
                )}
              />
              <span>
                <b>{prices.ip}</b> тг за адрес/мес
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className={styles.card__item}>
            <Image src="/icons/router.svg" alt="Router" width={30} height={30} />
            <div className={styles.item__content}>
              <Controller
                name="router"
                control={control}
                render={({ field }) => (
                  <OutlinedSelect
                    label="Тарифный план"
                    defaultValue={field.value}
                    options={[
                      { value: 'compact', label: 'Compact — 1 vCPU, 512 MB RAM' },
                      { value: 'large', label: 'Large — 2 vCPU, 1 GB RAM' }
                    ]}
                    onChange={field.onChange}
                  />
                )}
              />
              <span>
                <b>{prices.router[values.router]}</b> тг/мес
              </span>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Row gutter={[30, 20]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Button
                type="primary"
                onClick={handleOrderClick}
                style={{ width: '100%', height: '40px' }}
              >
                Заказать
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} style={{ display: 'flex', alignItems: 'center' }}>
              <Typography.Text>
                за <b>{total.toLocaleString('ru-RU')}</b> тг/
                {values.period === 'month' ? 'мес' : 'день'}
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        open={modalOpen}
        onCancel={handleModalClose}
        onOk={handleModalClose}
        okText="Ок"
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <Typography.Text style={{ fontSize: '16px' }}>
            Всего <b>{total}</b> тг/
            {values.period === 'month' ? 'мес' : 'день'}
          </Typography.Text>
          <Typography.Text style={{ fontSize: '16px' }}>Добавлено в корзину</Typography.Text>
        </div>
      </Modal>
    </div>
  );
};

export default FormVirtuozzo;
