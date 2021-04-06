import Rest from "../_rest"

/** Swagger da API: */
const URL_BASE          = "https://fakerestapi.azurewebsites.net/"
const URL_V1_Activities = "​api​/v1​/Activities"

export default class Example extends Rest {
    static get_all_activities() {
        return super.get(`${URL_BASE}${URL_V1_Activities}`)
    }
    static get_activities_by_id(id) {
        return super.get(`${URL_BASE}${URL_V1_Activities}/${id}`)
    }
    static post_activities(data) {
        return super.post(`${URL_V1_Activities}`, data)
    }
}
