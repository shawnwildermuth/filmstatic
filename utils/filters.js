const datefns = require("date-fns");
const { format } = require("date-fns");
const utcToZonedTime = require("date-fns-tz").utcToZonedTime;

module.exports = {
  format: datefns.format,
  formatISO: datefns.formatISO,
  formatDate: (data, fmt) => {
    return format(utcToZonedTime(data, "UTC"), "MMMM d, yyyy");
  },
  take: (data, num) => {
    if (data instanceof Array) {
      if (!num) num = 25;
      return data.slice(0, num);
    }

    return data;
  },
  skip: (data, num) => {
    if (data instanceof Array) {
      if (!num) num = 25;
      return data.slice(num);
    }

    return data;
  },
  supporterSort: (data) => {
    if (data instanceof Array) {
      return data.sort((a, b) => {
        const items1 = a[0].split(" ");
        const items2 = b[0].split(" ");
        const last1 = items1[items1.length - 1];
        const last2 = items2[items2.length - 1];
        if (last1 > last2) return 1;
        if (last1 < last2) return -1;
        return 0;
      });
    }

    return data;
  }
};
