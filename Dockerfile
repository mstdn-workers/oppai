FROM python:3.6

RUN pip install jupyter \
  pandas matplotlib scipy seaborn scikit-learn scikit-image \
  sympy cython patsy numba bokeh Mastodon.py \
  sqlalchemy

ENV NB_USER oppai
ENV NB_UID 1000
RUN useradd -m -s /bin/bash -N -u $NB_UID $NB_USER

USER $NB_USER

RUN mkdir /home/$NB_USER/work && \
    mkdir /home/$NB_USER/.jupyter

EXPOSE 8888
WORKDIR /home/$NB_USER/work

CMD ["jupyter", "notebook", "--ip='*'", "--port=8888", "--no-browser"]
