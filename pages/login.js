import dynamic from "next/dynamic"
import React from "react"
import { useForm } from "react-hook-form"
import Layout from "../components/web/Layout"
import useLang from "../hook/lang"
import { toast } from "react-toastify"
import Router, { useRouter } from "next/router"

function Login() {
  const { route } = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const handleFormSubmit = (data) => {
    if ((data.email == "admin@niltekyazilim.com", data.password == "123456")) {
      Router.push("/")
    } else {
      toast.error(lang["Kullanıcı adınız veya şifreniz hatalıdır!"], {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }

  const lang = useLang()
  return (
    <div className="h-screen">
      <Layout toTop="false">
        <main>
          <div className="bg_color_2  md:py-10">
            <div className="container margin_60_35 ">
              <div id="login-2">
                <h1>{lang["Lütfen Health Tourism'e giriş yapınız"]}</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div className="box_form clearfix">
                    <div className="box_login">
                      <a href="#0" className="social_bt facebook">
                        {lang["Facebook ile giriş yap"]}
                      </a>
                      <a href="#0" className="social_bt google">
                        {lang["Google ile giriş yap"]}
                      </a>
                      <a href="#0" className="social_bt linkedin">
                        {lang["Linkedin ile giriş yap"]}
                      </a>
                    </div>
                    <div className="box_login last">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder={lang["E-posta adresiniz"]}
                          {...register("email", {
                            required: lang["Bu alanın doldurulması zorunludur"],
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message:
                                lang[
                                  "Lütfen geçerli bir e-posta adresi giriniz"
                                ],
                            },
                          })}
                        />
                        {errors.email && (
                          <span className="text-red-500 text-xs">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder={lang["Şifreniz"]}
                          name="password"
                          id="password"
                          {...register("password", {
                            required: lang["Bu alanın doldurulması zorunludur"],
                          })}
                        />
                        {errors.password && (
                          <span className="text-red-500 text-xs">
                            {errors.password.message}
                          </span>
                        )}
                        <a href="#0" className="forgot">
                          <small>{lang["Şifrenizi mi unuttunuz?"]}</small>
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-black hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        {lang["Giriş yap"]}
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-center link_bright">
                  {lang["Kayıt olmak için tıklayın"]}
                  <a href="#0">
                    <strong> {lang["Kaydol"]}</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Login), {
  ssr: false,
})
