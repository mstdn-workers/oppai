FROM python:3.6

RUN echo 'APT::Default-Release "stable";' > /etc/apt/apt.conf.d/99target && \
    echo 'deb http://ftp.jp.debian.org/debian unstable main contrib non-free' >> /etc/apt/sources.list && \
    echo 'deb http://ftp.jp.debian.org/debian jessie main contrib non-free' >> /etc/apt/sources.list && \
    apt update && \
    apt upgrade -y && \
    apt install -y font-manager fonts-noto fonts-noto-cjk/unstable fonts-ipafont -qq && \
    apt-get clean && rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*

RUN pip install --upgrade pip && \
  pip install jupyter \
  pandas matplotlib scipy seaborn scikit-learn scikit-image \
  sympy cython patsy numba bokeh Mastodon.py \
  sqlalchemy emoji --upgrade
RUN pip install pivottablejs ipywidgets git+https://github.com/quantopian/qgrid
RUN jupyter nbextension enable --py --sys-prefix widgetsnbextension

ENV NB_USER oppai
ENV NB_UID 1000
RUN useradd -m -s /bin/bash -N -u $NB_UID $NB_USER

USER $NB_USER

RUN mkdir /home/$NB_USER/work && \
    mkdir /home/$NB_USER/.jupyter && \
    jupyter nbextension enable --py widgetsnbextension

EXPOSE 8888
WORKDIR /home/$NB_USER/work

CMD ["jupyter", "notebook", "--ip='*'", "--port=8888", "--no-browser"]
