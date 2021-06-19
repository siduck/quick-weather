(()=>{"use strict";let e=document.querySelector(".weath_desc"),t=document.querySelector(".city"),n=document.querySelector(".country"),r=document.querySelector(".temp_num"),a=document.querySelector(".feels_likeNum"),u=document.querySelector(".wind_num"),o=document.querySelector(".humidity_num");const c=(e,t)=>{e.textContent=t},i=async i=>{const d=`https://api.openweathermap.org/data/2.5/weather?q=${i}&appid=3db9f9f8a02a49fffc5a35164ea05c4f`;let m=await fetch(d);if(200!=m.status)throw alert("NO SUCH PLACE BRUH"),new Error("place not found ");(i=>{c(e,i.weather[0].description),c(t,i.name);let d=new Intl.DisplayNames(["en"],{type:"region"});c(n,d.of(i.sys.country)),c(r,Math.round(i.main.temp-273.15)),c(a,Math.round(i.main.feels_like-273.15)),c(u,i.wind.speed),c(o,i.main.humidity)})(await m.json())};document.querySelector("input").addEventListener("change",(e=>{i(e.currentTarget.value),e.currentTarget.value=""})),i("sanaa")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RpdlNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaUZ1bmNzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIndlYXRoX2Rlc2MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5IiwiY291bnRyeSIsInRlbXBfbnVtIiwiZmVlbHNfbGlrZU51bSIsIndpbmRfbnVtIiwiaHVtaWRpdHlfbnVtIiwiYWRkVGV4dCIsImRpdk5hbWUiLCJjb250ZW50IiwidGV4dENvbnRlbnQiLCJnZXREYXRhIiwiYXN5bmMiLCJhcmVhIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsImFsZXJ0IiwiRXJyb3IiLCJkYXRhIiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwibmFtZSIsInJlZ2lvbk5hbWVzIiwiSW50bCIsIkRpc3BsYXlOYW1lcyIsInR5cGUiLCJvZiIsInN5cyIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJ0ZW1wIiwiZmVlbHNfbGlrZSIsIndpbmQiLCJzcGVlZCIsImh1bWlkaXR5IiwiYWRkV2VhdGhlciIsImpzb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Im1CQUFPLElBQUlBLEVBQWFDLFNBQVNDLGNBQWMsZUFDcENDLEVBQU9GLFNBQVNDLGNBQWMsU0FDOUJFLEVBQVVILFNBQVNDLGNBQWMsWUFDakNHLEVBQVdKLFNBQVNDLGNBQWMsYUFDbENJLEVBQWdCTCxTQUFTQyxjQUFjLGtCQUN2Q0ssRUFBV04sU0FBU0MsY0FBYyxhQUNsQ00sRUFBZVAsU0FBU0MsY0FBYyxpQkNOakQsTUFBTU8sRUFBVSxDQUFDQyxFQUFTQyxLQUN4QkQsRUFBUUUsWUFBY0QsR0E2QmxCRSxFQUFVQyxNQUFPQyxJQUNyQixNQUNNQyxFQUFNLHFEQUFxREQsMkNBRWpFLElBQUlFLFFBQWlCQyxNQUFNRixHQUUzQixHQUF1QixLQUFuQkMsRUFBU0UsT0FFWCxNQURBQyxNQUFNLHNCQUNBLElBQUlDLE1BQU0sb0JBdkJELENBQUNDLElBQ2xCYixFQUFRVCxFQUFZc0IsRUFBS0MsUUFBUSxHQUFHQyxhQUdwQ2YsRUFBUU4sRUFBTW1CLEVBQUtHLE1BQ25CLElBQUlDLEVBQWMsSUFBSUMsS0FBS0MsYUFBYSxDQUFDLE1BQU8sQ0FBRUMsS0FBTSxXQUN4RHBCLEVBQVFMLEVBQVNzQixFQUFZSSxHQUFHUixFQUFLUyxJQUFJM0IsVUFHekNLLEVBQVFKLEVBQVUyQixLQUFLQyxNQUFNWCxFQUFLWSxLQUFLQyxLQUFPLFNBQzlDMUIsRUFBUUgsRUFBZTBCLEtBQUtDLE1BQU1YLEVBQUtZLEtBQUtFLFdBQWEsU0FDekQzQixFQUFRRixFQUFVZSxFQUFLZSxLQUFLQyxPQUM1QjdCLEVBQVFELEVBQWNjLEVBQUtZLEtBQUtLLFdBZ0JoQ0MsT0FGbUJ2QixFQUFTd0IsU0N2QzlCeEMsU0FBU0MsY0FBYyxTQUFTd0MsaUJBQWlCLFVBQVdDLElBQzFEOUIsRUFBUThCLEVBQUVDLGNBQWNDLE9BQ3hCRixFQUFFQyxjQUFjQyxNQUFRLE1BRzFCaEMsRUFBUSxVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IHdlYXRoX2Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoX2Rlc2NcIik7XG5leHBvcnQgbGV0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIik7XG5leHBvcnQgbGV0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50cnlcIik7XG5leHBvcnQgbGV0IHRlbXBfbnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wX251bVwiKTtcbmV4cG9ydCBsZXQgZmVlbHNfbGlrZU51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNfbGlrZU51bVwiKTtcbmV4cG9ydCBsZXQgd2luZF9udW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRfbnVtXCIpO1xuZXhwb3J0IGxldCBodW1pZGl0eV9udW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5X251bVwiKTtcbiIsImNvbnN0IGFkZFRleHQgPSAoZGl2TmFtZSwgY29udGVudCkgPT4ge1xuICBkaXZOYW1lLnRleHRDb250ZW50ID0gY29udGVudDtcbn07XG5cbi8vIGRpdnNcbmltcG9ydCB7XG4gIHdlYXRoX2Rlc2MsXG4gIGNpdHksXG4gIGNvdW50cnksXG4gIHRlbXBfbnVtLFxuICBmZWVsc19saWtlTnVtLFxuICB3aW5kX251bSxcbiAgaHVtaWRpdHlfbnVtLFxufSBmcm9tIFwiLi9kaXZTZWxlY3RvcnNcIjtcblxuY29uc3QgYWRkV2VhdGhlciA9IChkYXRhKSA9PiB7XG4gIGFkZFRleHQod2VhdGhfZGVzYywgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcblxuICAvLyBwbGFjZSBuYW1lXG4gIGFkZFRleHQoY2l0eSwgZGF0YS5uYW1lKTtcbiAgbGV0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFtcImVuXCJdLCB7IHR5cGU6IFwicmVnaW9uXCIgfSk7XG4gIGFkZFRleHQoY291bnRyeSwgcmVnaW9uTmFtZXMub2YoZGF0YS5zeXMuY291bnRyeSkpO1xuXG4gIC8vIGZpZ3VyZXNcbiAgYWRkVGV4dCh0ZW1wX251bSwgTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCAtIDI3My4xNSkpO1xuICBhZGRUZXh0KGZlZWxzX2xpa2VOdW0sIE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTUpKTtcbiAgYWRkVGV4dCh3aW5kX251bSwgZGF0YS53aW5kLnNwZWVkKTtcbiAgYWRkVGV4dChodW1pZGl0eV9udW0sIGRhdGEubWFpbi5odW1pZGl0eSk7XG59O1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGFyZWEpID0+IHtcbiAgY29uc3QgYXBpa2V5ID0gXCIzZGI5ZjlmOGEwMmE0OWZmZmM1YTM1MTY0ZWEwNWM0ZlwiO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2FyZWF9JmFwcGlkPSR7YXBpa2V5fWA7XG5cbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xuICAgIGFsZXJ0KFwiTk8gU1VDSCBQTEFDRSBCUlVIXCIpO1xuICAgIHRocm93IG5ldyBFcnJvcihcInBsYWNlIG5vdCBmb3VuZCBcIik7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGFkZFdlYXRoZXIocmVzdWx0KTtcbn07XG5cbmV4cG9ydCB7IGdldERhdGEgfTtcbiIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9tb2R1bGVzL2FwaUZ1bmNzXCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIGdldERhdGEoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5nZXREYXRhKFwic2FuYWFcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9