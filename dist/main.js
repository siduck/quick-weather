(()=>{"use strict";document.querySelector("input").addEventListener("change",(e=>{(async e=>{const o=`http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=3db9f9f8a02a49fffc5a35164ea05c4f`;let t=await fetch(o,{mode:"cors"});if(200!=t.status)throw new Error("NUUUU");let a=await t.json();console.log(a.name),console.log(a.weather[0].description),console.log(Math.round(a.main.temp-273.15)),console.log(Math.round(a.main.feels_like-273.15)),console.log(a.main.humidity),console.log(a.wind.speed)})(e.currentTarget.value)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaUZ1bmNzLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYXN5bmMiLCJjaXR5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJzdGF0dXMiLCJFcnJvciIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJ0ZW1wIiwiZmVlbHNfbGlrZSIsImh1bWlkaXR5Iiwid2luZCIsInNwZWVkIiwiZ2V0V2VhdGhlciIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Im1CQUVBQSxTQUFTQyxjQUFjLFNBQVNDLGlCQUFpQixVQUFXQyxJQ0Z6Q0MsT0FBT0MsSUFDeEIsTUFDTUMsRUFBTSxvREFBb0RELDJDQUVoRSxJQUFJRSxRQUFpQkMsTUFBTUYsRUFBSyxDQUFFRyxLQUFNLFNBRXhDLEdBQXVCLEtBQW5CRixFQUFTRyxPQUNYLE1BQU0sSUFBSUMsTUFBTSxTQUdsQixJQUFJQyxRQUFlTCxFQUFTTSxPQUU1QkMsUUFBUUMsSUFBSUgsRUFBT0ksTUFDbkJGLFFBQVFDLElBQUlILEVBQU9LLFFBQVEsR0FBR0MsYUFDOUJKLFFBQVFDLElBQUlJLEtBQUtDLE1BQU1SLEVBQU9TLEtBQUtDLEtBQU8sU0FDMUNSLFFBQVFDLElBQUlJLEtBQUtDLE1BQU1SLEVBQU9TLEtBQUtFLFdBQWEsU0FDaERULFFBQVFDLElBQUlILEVBQU9TLEtBQUtHLFVBQ3hCVixRQUFRQyxJQUFJSCxFQUFPYSxLQUFLQyxRRGR4QkMsQ0FBV3hCLEVBQUV5QixjQUFjQyxXIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9hcGlGdW5jc1wiO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBnZXRXZWF0aGVyKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG59KTtcbiIsImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zdCBhcGlrZXkgPSBcIjNkYjlmOWY4YTAyYTQ5ZmZmYzVhMzUxNjRlYTA1YzRmXCI7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2FwaWtleX1gO1xuXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcblxuICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5VVVVVXCIpO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhyZXN1bHQubmFtZSk7XG4gIGNvbnNvbGUubG9nKHJlc3VsdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgY29uc29sZS5sb2coTWF0aC5yb3VuZChyZXN1bHQubWFpbi50ZW1wIC0gMjczLjE1KSk7XG4gIGNvbnNvbGUubG9nKE1hdGgucm91bmQocmVzdWx0Lm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSkpO1xuICBjb25zb2xlLmxvZyhyZXN1bHQubWFpbi5odW1pZGl0eSk7XG4gIGNvbnNvbGUubG9nKHJlc3VsdC53aW5kLnNwZWVkKTtcbn07XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=