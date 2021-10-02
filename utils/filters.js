const datefns = require("date-fns");

module.exports = {
  format: datefns.format,
  formatISO: datefns.formatISO,
  formatDate: (data, fmt) => {
    return format(utcToZonedTime(data, "UTC"), "MMMM d, yyyy", { timeZone: "UTC" });
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
  }
};
