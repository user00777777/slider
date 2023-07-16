import React from 'react'
import ImageSlider from './ImageSlider';

export default function Slider() {
    const slides = [
        { url: "https://lh3.googleusercontent.com/pw/AIL4fc_IRfi1Pj_p7ulKkl_I7KM12HjPjRw8vaHrXQTcv3f85PyTnNHqmavmcl1rLOuWNImWzQ-uNK47PjbjEMlXl3XawyCqwvLBltCInaKjYPw_ZLlTli03tXZ3OmkaEd4-jdf-ub85jBXFCS3vSVodGYm-7Y3gKlvnuPE9tnHFACnzdd3Z2z0n3IvrhkRcoftDL7ByqI-ONq2PEaYq0wvP7TBcSEhC27MxvMZazdRWbcvnaVIJkQcWRqUWcAdiN8_6gx_MHeMnIUBftTZlOXBtCfdut79JWn33ifOB0LpJ2Zph9otma-L5MtZ3I5Y8oDL4VyPsdyON59kS8gpQ2bZmm382czsqknrUs8zKPxO6WMdkgmEXg6rfgKXeL7IDV87SIZ3BW6rZfsAW13orZJLCaH4C8MhQGa8c-GGxM3m-jbhiy86oILRaBgo5i8VBvEPwYjpFDoSmxnwFivyrU9GEEq7KmwXE_gGFgr4R4oG1m8IgZy4dLWfUkdWuYrpSp1L6BpTtu6V_v6Uka9lG0JCHobOftwWHiPy2h5TCUCZ0C-037ak7Oq8Wl9Mf7sM5BbToUIzssWF-aVaqKZubbWANHSrNvdn8-2732HKBBuQFNoaE3VL-q4BrmPD7Xv_etrAL2w-M7plGIYu6LX0H-d5x4NpOjTymTzXtGUyzaTXKKAHGWZ6wDLwThRU4qks3yuHX-1PG69pmFVCMkKxc6UpMh3lBsiaOxUtRHcvf5gfcG-AW1qu_TYy6qLyZm5Uw-n8UAScjyTv-B5Yt7jMMXU8JvlpRqBwlsaICX7UTtqh5OdNjIR-C_QnUmsiSsqMHEJ4x2gSCX1z8XPXYbOos8GPb6SdgcH7XTF0H3152GvTPQzSsAhFaE0U0YghLJKou1kyERmFO3vnYh_5WAw_ibOlMHdZDSw=w720-h959-s-no?authuser=0", title: "boat" },
        { url: "https://img.freepik.com/free-photo/beautiful-architecture-building_74190-6332.jpg?size=626&ext=jpg", title: "boat" },
        { url: "https://img.freepik.com/free-photo/japan-street-daytime_23-2148942935.jpg?size=626&ext=jpg", title: "forest" },
        { url: "https://img.freepik.com/free-photo/new-york-city-skyline-black-and-white_649448-4625.jpg?size=626&ext=jpg", title: "city" },
        { url: "https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?size=626&ext=jpg", title: "italy" },
      ];
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
      return (
        <div>
          <h1>Hello Yurii</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
        </div>
      );
}
