import React from 'react';

class Subtitle extends React.Component {
    // state = {
    //     movies: {},
    // };

    // componentDidMount() {
    //     // console.log(movies);
    //     this.setState({
    //         movies: this.props.movies,
    //     });
    // }

    // componentDidUpdate() {
    //     // const { movies, subtitle } = this.props;
    //     // console.log('update', movies);
    // }

    render() {
        const movieNow = { name: '', link: '' };
        const { movies, subtitle } = this.props;
        if (movies.length > 0) {
            movies.forEach(movie => {
                if (movie._id === subtitle._movie) {
                    // {movieName:name,movieLinkTime:link} = movie;
                    // console.log(movie);
                    movieNow.name = movie.name;
                    let timeMovie = subtitle.timeBegin.split(/[:.]/);
                    const timeRewind = 1;
                    timeMovie =
                        parseInt(timeMovie[0]) * 60 * 60 +
                        parseInt(timeMovie[1]) * 60 +
                        parseInt(timeMovie[2]) -
                        timeRewind;
                    // https://areena.yle.fi/1-1070789?seek=11 00:03:13.320
                    movieNow.link = `${movie.link}?seek=${timeMovie}`;
                }
            });
        }
        return (
            <div className="subtitle">
                <p className="subtitle-para">
                    {subtitle.subtitle} <br />
                    {movieNow.name}
                </p>

                <button className="subtitle-btn">
                    <a href={movieNow.link} className="hvr-pulse-shrink" target="_blank">
                        <i className="fas fa-play" />
                    </a>
                </button>
            </div>
        );
    }
}

export default Subtitle;
