(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const E=""+new URL("logo-BpS0LNIo.png",import.meta.url).href,M=document.querySelector("#app");M.innerHTML=`
  <div id="splash" class="fixed inset-0 z-50 flex items-center justify-center bg-pink-50 backdrop-blur-sm transition-opacity duration-700">
    <picture>
      <img src="${E}" alt="Logo" class="block mx-auto w-auto h-auto max-w-[90vw] max-h-[75vh] object-contain" />
    </picture>
  </div>
  <header class="py-10">
    <div class="mx-auto max-w-2xl px-4 text-center">
      <img src="${E}" alt="VetDose" class="mx-auto h-16 w-auto" />
      <p class="mt-2 text-gray-600">Calculadora de dosagem veterinária</p>
    </div>
  </header>

  <main class="mx-auto max-w-2xl px-4 pb-14">
    <section class="rounded-xl bg-white/90 p-6 shadow-md ring-1 ring-black/5">
      <div id="panel"></div>
    </section>
  </main>
`;const I=document.getElementById("splash");setTimeout(()=>{I.classList.add("opacity-0"),setTimeout(()=>{I.remove()},700)},2e3);const B={amoxicilina:{cachorro:{min:10,max:20,freq:"a cada 12h",dur:"5–7 dias",obs:"Uso oral comum."},gato:{min:10,max:20,freq:"a cada 12h",dur:"5–7 dias",obs:"Uso oral comum."}},doxiciclina:{cachorro:{min:5,max:5,freq:"a cada 12h",dur:"7–10 dias",obs:"Pode causar fotossensibilidade."},gato:{min:5,max:5,freq:"a cada 12h",dur:"7–10 dias",obs:"Administrar com água."}},enrofloxacina:{cachorro:{min:5,max:10,freq:"a cada 24h",dur:"5–10 dias",obs:"Evitar em animais jovens."}},dipirona:{cachorro:{min:25,max:50,freq:"a cada 8h",dur:"conforme necessidade",obs:"Uso conforme orientação."}},ivermectina:{cachorro:{min:.2,max:.4,freq:"dose única",dur:"—",obs:"Atenção raças sensíveis (MDR1)."},gato:{min:.2,max:.2,freq:"dose única",dur:"—",obs:"Atenção a reações adversas."}},cefalexina:{cachorro:{min:15,max:30,freq:"a cada 12h",dur:"7–14 dias",obs:"Uso oral."},gato:{min:15,max:30,freq:"a cada 12h",dur:"7–14 dias",obs:"Uso oral."}},meloxicam:{cachorro:{min:.2,max:.2,freq:"0,2 mg/kg inicial, 0,1 mg/kg manutenção 1x/dia",dur:"conforme orientação",obs:"Anti-inflamatório não esteroidal."}},prednisona:{cachorro:{min:.5,max:2,freq:"a cada 24h",dur:"conforme indicação",obs:"Ajuste conforme quadro clínico."}},furosemida:{cachorro:{min:2,max:4,freq:"a cada 8–12h",dur:"conforme resposta",obs:"Diurético — monitorar hidratação."}}},x={min:.1,max:500},P=[{value:"cachorro",label:"🐶 Cachorro"},{value:"gato",label:"🐱 Gato"},{value:"coelho",label:"🐰 Coelho"},{value:"cavalo",label:"🐴 Cavalo"},{value:"ave",label:"🕊️ Ave"},{value:"boi",label:"🐮 Boi"},{value:"porco",label:"🐷 Porco"}];function S(e){return Math.round((e+Number.EPSILON)*100)/100}function L(e){return e.toLocaleString("pt-BR",{maximumFractionDigits:2,minimumFractionDigits:0})}function N(e,r){const s=B[e];return s&&(s[r]||s.cachorro||s.gato)||null}function q(e={}){const r=document.getElementById("panel"),s=e.especie||"cachorro",l=e.pesoStr||"",o=e.med||"amoxicilina",t=e.concStr||"",a=!!e.sensivel;r.innerHTML=`
      <h2 class="text-lg font-semibold text-gray-900">Calcular dosagem</h2>
      <p class="mt-1 text-sm text-gray-600">Selecione a espécie, informe o peso, o medicamento e, opcionalmente, a concentração.</p>

      <form id="dose-form" class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="animal" class="block text-sm font-medium text-gray-700">Espécie</label>
          <select id="animal" class="mt-1 w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20">
            ${P.map(n=>`<option value="${n.value}" ${n.value===s?"selected":""}>${n.label}</option>`).join("")}
          </select>
        </div>

        <div>
          <label for="peso" class="block text-sm font-medium text-gray-700">Peso</label>
          <div class="relative mt-1">
            <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">kg</span>
            <input id="peso" inputmode="numeric" autocomplete="off" placeholder="0,00" value="${l}"
              class="w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20" />
          </div>
        </div>

        <div>
          <label for="medicamento" class="block text-sm font-medium text-gray-700">Medicamento</label>
          <select id="medicamento" class="mt-1 w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20">
            <option value="amoxicilina" ${o==="amoxicilina"?"selected":""}>Amoxicilina</option>
            <option value="doxiciclina" ${o==="doxiciclina"?"selected":""}>Doxiciclina</option>
            <option value="enrofloxacina" ${o==="enrofloxacina"?"selected":""}>Enrofloxacina</option>
            <option value="dipirona" ${o==="dipirona"?"selected":""}>Dipirona</option>
            <option value="ivermectina" ${o==="ivermectina"?"selected":""}>Ivermectina</option>
            <option value="cefalexina" ${o==="cefalexina"?"selected":""}>Cefalexina</option>
            <option value="meloxicam" ${o==="meloxicam"?"selected":""}>Meloxicam</option>
            <option value="prednisona" ${o==="prednisona"?"selected":""}>Prednisona</option>
            <option value="furosemida" ${o==="furosemida"?"selected":""}>Furosemida</option>
          </select>
        </div>

        <div>
          <label for="concentracao" class="block text-sm font-medium text-gray-700">Concentração (mg/mL) — opcional</label>
          <input id="concentracao" inputmode="decimal" placeholder="Ex.: 250" value="${t}" class="mt-1 w-full rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20" />
        </div>

        <div class="flex items-center gap-2 sm:col-span-2">
          <input id="racaSensivel" type="checkbox" ${a?"checked":""} class="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-600" />
          <label for="racaSensivel" class="text-sm text-gray-700">Raça sensível (Collie/Sheltie) — alerta para Ivermectina</label>
        </div>

        <div class="sm:col-span-2 mt-2">
          <button type="submit" class="inline-flex w-full items-center justify-center rounded-md bg-pink-500 px-4 py-2 text-white font-medium shadow-sm transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500/30">Calcular dose</button>
        </div>
      </form>

      <div id="alert" class="mt-4 hidden rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"></div>
  `;const v=document.getElementById("dose-form"),d=document.getElementById("animal"),u=document.getElementById("peso"),g=document.getElementById("medicamento"),p=document.getElementById("concentracao"),b=document.getElementById("racaSensivel");document.getElementById("alert");function h(n){n.addEventListener("input",()=>{let c=n.value;if(c=c.replace(/[^\d,\.]/g,""),c=c.replace(/\./g,""),c.indexOf(",")!==-1){const[m,i]=c.split(","),f=m.replace(/\B(?=(\d{3})+(?!\d))/g,".");n.value=i!==void 0?`${f},${i.replace(/[^\d]/g,"").slice(0,2)}`:f}else{const m=c.replace(/\B(?=(\d{3})+(?!\d))/g,".");n.value=m}})}function y(n){const c=i=>{if(!i)return"";i=i.replace(/^0+(\d)/,"$1"),i.length===1&&(i="0"+i);const f=i.slice(0,-2)||"0",$=i.slice(-2);return`${f.replace(/\B(?=(\d{3})+(?!\d))/g,".")},${$}`},m=()=>{let i=n.value.replace(/\D/g,"");n.value=c(i)};n.addEventListener("input",m),n.addEventListener("focus",m)}y(u),h(p);function k(n){return n?Number(n.replace(/\./g,"").replace(",",".")):NaN}v.addEventListener("submit",n=>{n.preventDefault();const c=d.value,m=k(u.value),i=g.value,f=k(p.value),$=b.checked;w({especie:c,peso:m,med:i,conc:f,sens:$,raw:{pesoStr:u.value,concStr:p.value}})})}function D(e){const r=document.getElementById("panel");r.innerHTML=`
    <button id="voltar" class="-ml-2 inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-gray-700 hover:text-gray-900"><span>←</span><span>Voltar</span></button>
    <div class="mt-3 rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5">
      <div class="text-base font-semibold">Plano de cuidado</div>
      <div class="mt-1 text-sm text-gray-700">Espécie: <span class="font-medium">${e.especie}</span> • Medicamento: <span class="font-medium capitalize">${e.med}</span></div>

      <div class="mt-4 flex items-baseline gap-3">
        <span class="text-sm text-gray-600">Dose</span>
        <span class="text-2xl font-bold text-green-600">${e.doseMg} mg</span>
        ${e.volumeMl?`<span class=\\"text-sm text-gray-600\\">(≈ ${e.volumeMl} mL)</span>`:""}
      </div>

      <div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div class="rounded-lg bg-gray-50 px-3 py-2"><div class="text-xs text-gray-500">Frequência</div><div class="font-medium">${e.freq}</div></div>
        <div class="rounded-lg bg-gray-50 px-3 py-2"><div class="text-xs text-gray-500">Duração</div><div class="font-medium">${e.dur}</div></div>
      </div>

      <div class="mt-4 border-t pt-4 text-sm text-gray-700">Referência: ${e.faixaStr}</div>
      <div class="mt-2 text-sm text-gray-700">Observação: ${e.obs}</div>
      ${e.alerta?`<div class=\\"mt-3 rounded border border-amber-200 bg-amber-50 px-3 py-2 text-amber-800\\">${e.alerta}</div>`:""}
    </div>
  `,document.getElementById("voltar").addEventListener("click",()=>{q(e.formState)})}function w({especie:e,peso:r,med:s,conc:l,sens:o,raw:t}){const a=N(s,e),v=document.getElementById("panel"),d=y=>{v.insertAdjacentHTML("beforeend",`<div class="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">${y}</div>`)};if(!Number.isFinite(r))return d("Informe um peso válido (número).");if(r<=0)return d("Peso deve ser maior que zero.");if(r<x.min)return d(`Peso muito baixo. Mínimo: ${x.min} kg.`);if(r>x.max)return d(`Peso muito alto. Máximo: ${x.max} kg.`);if(!a)return d("Não há protocolo cadastrado para esta combinação de medicamento e espécie.");if(t.concStr&&(!Number.isFinite(l)||l<=0))return d("Concentração inválida. Informe um valor em mg/mL maior que 0.");const u=a.min===a.max?a.min:(a.min+a.max)/2,g=S(r*u),p=t.concStr?S(g/l):null,b=a.min===a.max?`${a.min} mg/kg`:`${a.min}–${a.max} mg/kg (usado ${S(u)} mg/kg)`,h=s==="ivermectina"&&e==="cachorro"&&o?"Atenção: Ivermectina pode ser contraindicada em raças sensíveis (MDR1).":"";D({especie:e,med:s,doseMg:L(g),volumeMl:p!==null?L(p):"",freq:a.freq,dur:a.dur,faixaStr:b,obs:a.obs,alerta:h,formState:{especie:e,pesoStr:t.pesoStr,med:s,concStr:t.concStr,sensivel:o}})}q();
//# sourceMappingURL=index-BAbL6Ot0.js.map
