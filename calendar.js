(function () {
  const EMMAIE_MONTHS = [
    { key: 'Honstrim', label: 'Honstrim', gloss: 'Monstre 0', order: 1, days: 30 },
    { key: 'Dulett', label: 'Dulett', gloss: 'Duel Xceptionnel', order: 2, days: 30 },
    { key: 'Mobiup', label: 'Mobiup', gloss: 'Mobius Netwow', order: 3, days: 31 },
    { key: 'Gastelm', label: 'Gastelm', gloss: 'GESTALT', order: 4, days: 30 },
    { key: 'Ozaett', label: 'Ozaett', gloss: 'ZooZaZe', order: 5, days: 30 },
    { key: 'Skarp', label: 'Skarp', gloss: 'SPARK', order: 6, days: 31 },
    { key: 'Xyvym', label: 'Xyvym', gloss: 'VII-X', order: 7, days: 30 },
    { key: 'Succett', label: 'Succett', gloss: 'PROjECT SSeCCu$', order: 8, days: 30 },
    { key: 'Ignorum', label: 'Ignorum', gloss: 'IDK', order: 9, days: 31 },
    { key: 'Gliop', label: 'Gliop', gloss: 'Gliobe', order: 10, days: 30 },
    { key: 'Dominitt', label: 'Dominitt', gloss: 'DOMINION', order: 11, days: 30 },
    { key: 'Uof Ervuap', label: 'Uof Ervuap', gloss: 'Pauvre Fou', order: 12, days: 31 },
  ];

  const EMMAIE_YEAR_DAYS = EMMAIE_MONTHS.reduce((sum, month) => sum + month.days, 0);
  const DAY_MS = 24 * 60 * 60 * 1000;
  const EMMAIE_YEAR_ZERO_DATE = createUtcDate(2025, 3, 2);
  const EMMAIE_INTERCALARY_NAME = 'Zérok';
  const SYONEME_SEQUENCE = ['Cilar', 'Ecstel', 'Linkar', 'Histel', 'Kaleidar', 'Zigziel'];
  const SYONEME_SPECIAL_DAY_31 = 'Nouvarel';

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function getEmmaieCycleLength(startYear) {
    return isLeapYear(startYear + 1) ? 366 : 365;
  }

  function getIntercalaryDays(startYear) {
    return getEmmaieCycleLength(startYear) - EMMAIE_YEAR_DAYS;
  }

  function createUtcDate(year, monthIndex, day) {
    return new Date(Date.UTC(year, monthIndex, day));
  }

  function parseIsoDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || '').trim());
    if (!match) return null;
    return createUtcDate(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }

  function formatIsoDate(date) {
    return [
      date.getUTCFullYear(),
      String(date.getUTCMonth() + 1).padStart(2, '0'),
      String(date.getUTCDate()).padStart(2, '0'),
    ].join('-');
  }

  function formatDisplayDate(date) {
    return [
      String(date.getUTCDate()).padStart(2, '0'),
      String(date.getUTCMonth() + 1).padStart(2, '0'),
      date.getUTCFullYear(),
    ].join('/');
  }

  function formatFrenchLongDate(date) {
    const monthNames = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];

    return date.getUTCDate() + ' ' + monthNames[date.getUTCMonth()] + ' ' + date.getUTCFullYear();
  }

  function formatFrenchWeekday(date) {
    const weekday = new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      timeZone: 'UTC',
    }).format(date);
    return weekday.charAt(0).toUpperCase() + weekday.slice(1);
  }

  function getGregorianYearLength(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function getGregorianDayOfYear(date) {
    const startOfYear = createUtcDate(date.getUTCFullYear(), 0, 1);
    return diffDays(startOfYear, date) + 1;
  }

  function formatEmmaieYearNumber(yearNumber) {
    const sign = yearNumber < 0 ? '-' : '';
    const absoluteYear = Math.abs(yearNumber);
    return sign + String(absoluteYear).padStart(4, '0');
  }

  function getEmmaieMonthOrder(monthKey) {
    const month = EMMAIE_MONTHS.find((item) => item.key === monthKey);
    return month ? month.order : 0;
  }

  function formatEmmaieNumericDate(yearNumber, monthKey, day) {
    const monthNumber = monthKey === 'intercalary' ? 0 : getEmmaieMonthOrder(monthKey);
    return (
      String(day).padStart(2, '0') +
      '/' +
      String(monthNumber).padStart(2, '0') +
      '/' +
      formatEmmaieYearNumber(yearNumber)
    );
  }

  function formatEmmaieLongDate(yearNumber, monthKey, day) {
    if (monthKey === 'intercalary') {
      return String(day) + ' ' + EMMAIE_INTERCALARY_NAME + ' ' + formatEmmaieYearNumber(yearNumber);
    }

    return String(day) + ' ' + monthKey + ' ' + formatEmmaieYearNumber(yearNumber);
  }

  function getSyonemeForEmmaieDate(monthKey, day) {
    if (monthKey === 'intercalary' || !Number.isFinite(day) || day < 1) {
      return null;
    }

    if (day === 31) {
      return SYONEME_SPECIAL_DAY_31;
    }

    return SYONEME_SEQUENCE[(day - 1) % SYONEME_SEQUENCE.length];
  }

  function diffDays(startDate, endDate) {
    return Math.floor((endDate.getTime() - startDate.getTime()) / DAY_MS);
  }

  function addDays(date, days) {
    return new Date(date.getTime() + days * DAY_MS);
  }

  function getEmmaieCycleStartYear(gregorianDate) {
    const year = gregorianDate.getUTCFullYear();
    const currentJuneFirst = createUtcDate(year, 5, 1);
    return gregorianDate >= currentJuneFirst ? year : year - 1;
  }

  const EMMAIE_YEAR_ZERO_CYCLE_START_YEAR = getEmmaieCycleStartYear(EMMAIE_YEAR_ZERO_DATE);

  function getEmmaieCycleStartDate(startYear) {
    return createUtcDate(startYear, 5, 1);
  }

  function getEmmaieMonthAtDayIndex(dayIndex) {
    let remaining = dayIndex;

    for (const month of EMMAIE_MONTHS) {
      if (remaining < month.days) {
        return {
          type: 'month',
          month,
          day: remaining + 1,
        };
      }
      remaining -= month.days;
    }

    return {
      type: 'intercalary',
      day: remaining + 1,
    };
  }

  function convertGregorianToEmmaie(gregorianDate) {
    const cycleStartYear = getEmmaieCycleStartYear(gregorianDate);
    const cycleStartDate = getEmmaieCycleStartDate(cycleStartYear);
    const cycleLength = getEmmaieCycleLength(cycleStartYear);
    const dayIndex = diffDays(cycleStartDate, gregorianDate);

    if (dayIndex < 0 || dayIndex >= cycleLength) return null;

    const mapped = getEmmaieMonthAtDayIndex(dayIndex);
    return {
      cycleStartYear,
      cycleEndYear: cycleStartYear + 1,
      yearNumber: cycleStartYear - EMMAIE_YEAR_ZERO_CYCLE_START_YEAR,
      cycleStartDate,
      cycleLength,
      dayIndex,
      mapped,
    };
  }

  function getCycleStartYearFromEmmaieYear(yearNumber) {
    return EMMAIE_YEAR_ZERO_CYCLE_START_YEAR + yearNumber;
  }

  function convertEmmaieToGregorian(yearNumber, monthKey, day) {
    const cycleStartYear = getCycleStartYearFromEmmaieYear(yearNumber);
    const cycleStartDate = getEmmaieCycleStartDate(cycleStartYear);
    const intercalaryDays = getIntercalaryDays(cycleStartYear);

    let dayOffset = 0;
    if (monthKey === 'intercalary') {
      if (day < 1 || day > intercalaryDays) return null;
      dayOffset = EMMAIE_YEAR_DAYS + (day - 1);
    } else {
      const month = EMMAIE_MONTHS.find((item) => item.key === monthKey);
      if (!month || day < 1 || day > month.days) return null;

      for (const currentMonth of EMMAIE_MONTHS) {
        if (currentMonth.key === month.key) break;
        dayOffset += currentMonth.days;
      }
      dayOffset += day - 1;
    }

    return {
      gregorianDate: addDays(cycleStartDate, dayOffset),
      cycleStartYear,
      cycleEndYear: cycleStartYear + 1,
      cycleLength: getEmmaieCycleLength(cycleStartYear),
      dayIndex: dayOffset,
    };
  }

  function buildEmmaieMonthOptions(select) {
    select.innerHTML = '';

    EMMAIE_MONTHS.forEach((month) => {
      const option = document.createElement('option');
      option.value = month.key;
      option.textContent = month.label + ' (' + month.order + ')';
      select.appendChild(option);
    });

    const intercalaryOption = document.createElement('option');
    intercalaryOption.value = 'intercalary';
    intercalaryOption.textContent = EMMAIE_INTERCALARY_NAME + ' (0)';
    select.appendChild(intercalaryOption);
  }

  function updateEmmaieDayConstraints(yearInput, monthInput, dayInput) {
    const yearNumber = Number(yearInput.value || '0');
    const cycleStartYear = getCycleStartYearFromEmmaieYear(yearNumber);
    const monthKey = monthInput.value;
    let maxDay = 31;

    if (monthKey === 'intercalary') {
      maxDay = Math.max(1, getIntercalaryDays(cycleStartYear));
    } else {
      const month = EMMAIE_MONTHS.find((item) => item.key === monthKey);
      maxDay = month ? month.days : 31;
    }

    dayInput.max = String(maxDay);
    if (Number(dayInput.value || '1') > maxDay) {
      dayInput.value = String(maxDay);
    }
  }

  function renderGregorianToEmmaie(resultEl, gregorianDate) {
    const conversion = convertGregorianToEmmaie(gregorianDate);
    if (!conversion) {
      resultEl.innerHTML = 'Conversion indisponible.';
      return;
    }

    const mapped = conversion.mapped;
    const monthKey = mapped.type === 'month' ? mapped.month.label : 'intercalary';
    const day = mapped.day;
    const syoneme = getSyonemeForEmmaieDate(monthKey, day);
    const weekday = formatFrenchWeekday(gregorianDate);
    const gregorianDayOfYear = getGregorianDayOfYear(gregorianDate);
    const gregorianYearLength = getGregorianYearLength(gregorianDate.getUTCFullYear());
    const emmaieDayOfYear = conversion.dayIndex + 1;
    const emmaieYearLength = conversion.cycleLength;

    resultEl.innerHTML =
      '<b>' +
      formatEmmaieNumericDate(conversion.yearNumber, monthKey, day) +
      ' (' +
      formatEmmaieLongDate(conversion.yearNumber, monthKey, day) +
      ')</b>' +
      '<br>' +
      'Syoneme : ' +
      (syoneme || '—') +
      '<br>' +
      'Semaine : ' +
      weekday +
      '<br>' +
      'Jour sur jour : Grégorien ' +
      gregorianDayOfYear +
      ' sur ' +
      gregorianYearLength +
      ' · Emmaïe ' +
      emmaieDayOfYear +
      ' sur ' +
      emmaieYearLength;

  }

  function renderEmmaieToGregorian(resultEl, yearInput, monthInput, dayInput) {
    const yearNumber = Number(yearInput.value || '0');
    const monthKey = monthInput.value;
    const day = Number(dayInput.value || '0');

    if (!Number.isFinite(yearNumber) || !monthKey || !day) {
      resultEl.innerHTML = 'Renseigner une année, un mois et un jour.';
      return;
    }

    const conversion = convertEmmaieToGregorian(yearNumber, monthKey, day);
    if (!conversion) {
      resultEl.innerHTML = 'Jour invalide pour ce cycle Emmaïe.';
      return;
    }

    const syoneme = getSyonemeForEmmaieDate(monthKey, day);
    const weekday = formatFrenchWeekday(conversion.gregorianDate);
    const gregorianDayOfYear = getGregorianDayOfYear(conversion.gregorianDate);
    const gregorianYearLength = getGregorianYearLength(conversion.gregorianDate.getUTCFullYear());
    const emmaieDayOfYear = conversion.dayIndex + 1;
    const emmaieYearLength = conversion.cycleLength;

    resultEl.innerHTML =
      '<b>' +
      formatDisplayDate(conversion.gregorianDate) +
      ' (' +
      formatFrenchLongDate(conversion.gregorianDate) +
      ')</b>' +
      '<br>' +
      'Syoneme : ' +
      (syoneme || '—') +
      '<br>' +
      'Semaine : ' +
      weekday +
      '<br>' +
      'Jour sur jour : Grégorien ' +
      gregorianDayOfYear +
      ' sur ' +
      gregorianYearLength +
      ' · Emmaïe ' +
      emmaieDayOfYear +
      ' sur ' +
      emmaieYearLength;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const gregorianInput = document.getElementById('gregorianDateInput');
    const gregorianResult = document.getElementById('gregorianToEmmaieResult');
    const emmaieYearInput = document.getElementById('emmaieYearInput');
    const emmaieMonthInput = document.getElementById('emmaieMonthInput');
    const emmaieDayInput = document.getElementById('emmaieDayInput');
    const emmaieResult = document.getElementById('emmaieToGregorianResult');

    if (
      !gregorianInput ||
      !gregorianResult ||
      !emmaieYearInput ||
      !emmaieMonthInput ||
      !emmaieDayInput ||
      !emmaieResult
    ) {
      return;
    }

    buildEmmaieMonthOptions(emmaieMonthInput);

    const today = new Date();
    const todayUtc = createUtcDate(today.getFullYear(), today.getMonth(), today.getDate());
    gregorianInput.value = formatIsoDate(todayUtc);

    const todayConversion = convertGregorianToEmmaie(todayUtc);
    if (todayConversion) {
      emmaieYearInput.value = String(todayConversion.yearNumber);
      if (todayConversion.mapped.type === 'month') {
        emmaieMonthInput.value = todayConversion.mapped.month.key;
        emmaieDayInput.value = String(todayConversion.mapped.day);
      } else {
        emmaieMonthInput.value = 'intercalary';
        emmaieDayInput.value = String(todayConversion.mapped.day);
      }
    } else {
      emmaieYearInput.value = String(today.getFullYear());
      emmaieDayInput.value = '1';
    }

    function updateGregorianSide() {
      const parsed = parseIsoDate(gregorianInput.value);
      if (!parsed) {
        gregorianResult.innerHTML = 'Date grégorienne invalide.';
        return;
      }
      renderGregorianToEmmaie(gregorianResult, parsed);
    }

    function updateEmmaieSide() {
      updateEmmaieDayConstraints(emmaieYearInput, emmaieMonthInput, emmaieDayInput);
      renderEmmaieToGregorian(emmaieResult, emmaieYearInput, emmaieMonthInput, emmaieDayInput);
    }

    gregorianInput.addEventListener('input', updateGregorianSide);
    emmaieYearInput.addEventListener('input', updateEmmaieSide);
    emmaieMonthInput.addEventListener('change', updateEmmaieSide);
    emmaieDayInput.addEventListener('input', updateEmmaieSide);

    updateGregorianSide();
    updateEmmaieSide();
  });
})();