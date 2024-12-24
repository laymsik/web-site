let menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "340px"
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}

function toggleMenuClose(){
    if(menuList.style.maxHeight == "340px")
    {
        menuList.style.maxHeight = "0px"
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}

function openModal(hero) {
    document.getElementById("modal").style.display = "block";
    if (hero === 'hero1') {
        document.getElementById("modal-title").innerText = "Клыков Юрий Константинович";
        document.getElementById("modal-description").innerText = 'Учился в школе №2 города Элисты. Был самым юным участником партизанского отряда №59 "Гром", который был сформирован в 1941 году. В начале ноября 1942 года партизаны выследили группу немецкой разведки и уничтожили из 25 ее членов 17 человек. До самых последних своих дней Юрий был примером мужества и героизма.';
        document.getElementById("photo").innerHTML = '<img src="src/images/num1.jpg" alt="a" class="photo">'
    } else if (hero === 'hero2') {
        document.getElementById("modal-title").innerText = "Хечеев Бембя Манджиевич";
        document.getElementById("modal-description").innerText = 'Герой Советского Союза, Участник Великой Отечественной войны. В 1938 году был призван в ряды Красной Армии. Участвовал в Сталинградском сражении. 30 апреля 1945 года, при наступлении на населенный пункт Бредиков. Бембя Хечеев поднял в атаку бойцов и первым ворвался в укрепленный пункт, распологавшийся в населенном пункте. В этом бою лично уничтожил 60 солдат и офицеров противника, подавил несколько огневых точек и взял в плен 13 немцев.';
        document.getElementById("photo").innerHTML = '<img src="src/images/num2.jpg" alt="a" class="photo">'
    } else if (hero === 'hero3') {
        document.getElementById("modal-title").innerText = "Сельгиков Михаил Арыкович";
        document.getElementById("modal-description").innerText = 'Уроженец п. Кегульта Кетченеровского района Республики Калмыкия. Участник Великой Отечественной Войны 1941 - 1945 гг. с ее первых дней. Герой Советского Союза. \n В июле 1942 г. Сельгиков назначен начальником штаба партизанского отряда имени Степана Разина. За 3 месяца отряд уничтожил около тысячи человек противника. Взорвал 2 железнодорожных моста, пустил под откос 6 поездов, подорвал около 180 автомобилей.';
        document.getElementById("photo").innerHTML = '<img src="src/images/num3.jpg" alt="a" class="photo">'
    } else if (hero === 'hero4') {
        document.getElementById("modal-title").innerText = "Молоканов Гаря Шуптурович";
        document.getElementById("modal-description").innerText = 'Боец партизанской группы №57 (командир П.Н. Яковлев, комиссар Б.У. Убушаев), которая уничтожила несколько отрядов немцев. В ночь с 22 на 23 октября 1942г. в селении Кугульма группа разгромила румынский гарнизон. В середине ноября 1942г. была окружена в 70 километрах к северу от Элисты. В течение суток вела бой против немцев, уничтожила 30 немецких военнослужащих. Была уничтожена противником.';
        document.getElementById("photo").innerHTML = '<img src="src/images/num4.jpg" alt="a" class="photo">'
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    document.getElementById("modal")
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const map = L.map('map').setView([46.307743, 44.269759], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const streets = {
    "Улица Клыкова": [[46.306450, 44.270604], [46.310661, 44.298774]],
    "Улица Хечеева": [[46.314040, 44.268254], [46.314149, 44.275325]],
    "Улица Сельгикова": [[46.311841, 44.264943], [46.311936, 44.265820], [46.311978, 44.266761], [46.311908, 44.268897], [46.311694, 44.271035], [46.311693, 44.272043], [46.311709, 44.272525], [46.311744, 44.273218], [46.311842, 44.275187]],
    "Улица Молоканова": [[46.314786, 44.268018], [46.314963, 44.276939], [46.315056, 44.278907]],
};

let marker;

document.getElementById('streetSelect').addEventListener('change', function() {
    const selectedStreet = this.value;

    map.eachLayer(function(layer) {
        if (layer instanceof L.Polyline || layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    if (selectedStreet && streets[selectedStreet]) {
        const coordinates = streets[selectedStreet];
        const polyline = L.polyline(coordinates, { color: 'red' }).addTo(map);
        map.fitBounds(polyline.getBounds());

        const streetMidPoint = coordinates[Math.floor(coordinates.length/10)];
        marker = L.marker(streetMidPoint).addTo(map)
            .bindPopup(selectedStreet)
            .openPopup();
    }
});