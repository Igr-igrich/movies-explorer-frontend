class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getStartData() {
    return Promise.all([this.getUserInfo(), this.getAllCards()]);
  }

  getUserInfo() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._handleResponse(res));
  }

  changeUserInfo(user) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => this._handleResponse(res));
  }

  getSavedMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._handleResponse(res));
  }

  saveMovie(movie) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    }).then((res) => this._handleResponse(res));
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._handleResponse(res));
  }
}

export const api = new Api({
  baseUrl: "https://api.diploma.nomoredomainsmonster.ru",
});
