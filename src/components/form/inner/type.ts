export type FormValues = {
  cores: number;
  ram: number;
  nvme: number;
  archive: number;
  ip: number;
  publicNetwork: 'order' | 'not-order';
  router: 'compact' | 'large';
  period: 'day' | 'month';
};
