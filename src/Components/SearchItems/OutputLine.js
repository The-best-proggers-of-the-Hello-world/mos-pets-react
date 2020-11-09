import React, {Component} from 'react';

export default class OutputLine extends Component {
    render() {
        return (
            <div class="line">
                <div class="view">
                    <div class="tcol-1">1665з-20</div>
                    <div class="tcol-2">Собака</div>
                    <div class="tcol-3">Василий</div>
                    <div class="tcol-4">М</div>
                    <div class="tcol-5">7/20/2020</div>
                    <div class="tcol-6">7/29/2020</div>
                    <div class="tcol-7">100</div>
                    <div class="tcol-8">643094100731522</div>
                    <div class="tcol-9">Вакцинация</div>
                    <div class="tcol-10"></div>
                </div>
                <div class="more hidden"></div>
            </div>
        );
    }
}
