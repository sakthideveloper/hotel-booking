(function() {
    'use strict';

    angular
        .module('app.service', [])
        .factory('Hotels', function() {

            var hotels = [{
                id: 1,
                hotelName: 'NH Collection Frankfurt City',
                avatar: 'images/pic.jpg',
                city: 'Chennai',
                support: 'Supplier',
                feature: ['images/wifi.svg', 'images/restaurant.svg', 'images/car.svg'],
                service: ['Breakfast', 'Airport Pickup'],
                state: 'Tamilnadu',
                price: '$700',
                country: 'India',
                address: 'Neusser Straße 27-2, Germany',
                phone: '+91- 8754488646',
                tel: '+91-044 4385 8864',
                distanceByFlight: '4.0 Miles',
                distanceByTrain: '8.0 Miles',
                map: 'https://www.google.co.in/maps?source=tldsi&hl=en',
                email: 'm.sakthideveloper@gmail.com',
                type: 'Economy',
                star: '3 Star',
                page: 1,
                hasMore: 'true',
                isLoading: 'false'

            }, {
                id: 2,
                hotelName: 'Ginger Hotel CH',
                avatar: 'images/pic.jpg',
                city: 'Chennai',
                support: 'Supplier',
                feature: ['images/wifi.svg', 'images/restaurant.svg', 'images/car.svg'],
                service: ['Breakfast', 'Airport Pickup'],
                state: 'Tamilnadu',
                price: '$600',
                country: 'India',
                address: 'G3 A R Cauvery Enclave, Vadapalani, Chennai',
                phone: '+91- 8754488646',
                tel: '+91-044 4385 8864',
                distanceByFlight: '1.0 Miles',
                distanceByTrain: '2.0 Miles',
                map: 'https://www.google.co.in/maps?source=tldsi&hl=en',
                email: 'm.sakthideveloper@gmail.com',
                type: 'Business',
                star: '5 Star',
                page: 1,
                hasMore: 'true',
                isLoading: 'false'

            }, {
                id: 3,
                hotelName: 'Taj Hotel CH',
                avatar: 'images/pic.jpg',
                city: 'Chennai',
                support: 'Supplier',
                feature: ['images/wifi.svg', 'images/restaurant.svg', 'images/car.svg'],
                service: ['Breakfast', 'Airport Pickup'],
                state: 'Tamilnadu',
                price: '$1200',
                country: 'India',
                address: 'Plant no. 13 Office Building, Vikhroli (E)',
                phone: '+91- 8754488646',
                tel: '+91-044 4385 8864',
                distanceByFlight: '2.5 Miles',
                distanceByTrain: '3.5 Miles',
                map: 'https://www.google.co.in/maps?source=tldsi&hl=en',
                email: 'm.sakthideveloper@gmail.com',
                type: 'Business',
                star: '7 Star',
                page: 1,
                hasMore: 'true',
                isLoading: 'false'

            }];

            return {
                all: function() {
                    return hotels;
                },
                remove: function(hotel) {
                    hotels.splice(hotels.indexOf(hotel), 1);
                },
                get: function(id_hotel) {
                    for (var i = 0; i < hotels.length; i++) {
                        if (hotels[i].id === parseInt(id_hotel)) {
                            return hotels[i];
                        }
                    }
                    return null;
                },
                loadHotels: function() {
                    if (self.hasMore && !self.isLoading) {
                        self.isLoading = true;

                        var params = {
                            'page': self.page

                        };

                        Hotels.get(params, function(id_hotel) {
                            for (var i = 0; i < hotels.length; i++) {
                                if (hotels[i].id === parseInt(id_hotel)) {
                                    return hotels[i];
                                }
                            }

                            if (!hotels.next) {
                                self.hasMore = false;
                            }
                            self.isLoading = false;
                        });
                    }

                },
                loadMore: function() {
                    if (self.hasMore && !self.isLoading) {
                        self.page += 1;
                        self.loadHotels();
                    }
                }
            };
        })

})();
