export const CookieService = {
  setCookie(name: string, value: string, days?: number): void {
    let expires = '';

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + (value || '') + expires + ';';
  },

  getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
      if (cookie.indexOf(name + '=') > -1) {
        return cookie.split('=')[1];
      }
    }

    return null;
  },
};
