import React, {Component} from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div class="search-bar col-12">
                <form name="search-form" action="">
                    <div class="input-line">
                        <div class="search-icon">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.383 12.214L16.835 15.669L15.158 17.345L11.708 13.892C10.452 14.8008 8.94032 15.2881 7.39003 15.284C6.41961 15.2865 5.45834 15.0965 4.56182 14.7251C3.6653 14.3536 2.85134 13.8081 2.16703 13.12C1.47785 12.4349 0.931458 11.6199 0.559485 10.7222C0.187512 9.8244 -0.00264502 8.86178 2.77896e-05 7.89002C-0.00189286 6.91945 0.188435 5.9581 0.560027 5.06148C0.931618 4.16485 1.47711 3.3507 2.16503 2.66602C2.84951 1.97749 3.66374 1.43154 4.56061 1.05975C5.45747 0.687958 6.41916 0.497713 7.39003 0.500021C8.36058 0.497812 9.32194 0.68811 10.2185 1.0599C11.115 1.4317 11.9289 1.9776 12.613 2.66602C15.209 5.26302 15.465 9.32602 13.383 12.214ZM7.39003 2.87202C6.04803 2.87202 4.79103 3.39202 3.84203 4.34202C3.37472 4.80684 3.00433 5.3598 2.75233 5.96885C2.50034 6.5779 2.37175 7.23091 2.37403 7.89002C2.37403 9.23502 2.89403 10.496 3.84303 11.44C4.307 11.9085 4.85957 12.2799 5.46854 12.5326C6.07752 12.7853 6.7307 12.9143 7.39003 12.912C8.04886 12.9142 8.70155 12.7854 9.31014 12.533C9.91872 12.2806 10.4711 11.9098 10.935 11.442C11.875 10.4998 12.403 9.22333 12.4034 7.89243C12.4037 6.56154 11.8764 5.28478 10.937 4.34202C10.4725 3.87442 9.9198 3.5037 9.31092 3.25136C8.70204 2.99902 8.04912 2.87008 7.39003 2.87202Z" fill="black"/>
                            </svg>
                        </div>
                        <input name="serch" type="text" placeholder="Поиск"/>
                    </div>
                    <div class="filters"></div>
                </form>
            </div>
        );
    }
}